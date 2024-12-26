const puppeteer = require('puppeteer')
const fs = require('fs')

// Load URLs from urls.json file
const urls = JSON.parse(fs.readFileSync('urls.json', 'utf-8'))

// This function uses Puppeteer to fetch product URLs from a website
async function fetchProductUrlsWithPuppeteer(domain) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Disable sandboxing for server environments
    })
    const page = await browser.newPage()

    // Increase the navigation timeout for slow pages like BestBuy
    await page.goto(domain, {waitUntil: 'domcontentloaded', timeout: 60000})

    // Wait for specific elements to ensure the page has loaded
    await page.waitForSelector('a') // Adjust this based on the structure of the website

    // Get all the links from the page and filter out product URLs
    const productUrls = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'))
      return links
        .map(link => link.href)
        .filter(href => {
          if (href) {
            // Match Amazon product URLs
            if (/\/dp\//.test(href)) {
              return true
            }
            // Match eBay product URLs
            if (/ebay\.com\/itm\//.test(href)) {
              return true
            }
            // Match BestBuy product URLs (adjust pattern if needed)
            if (/bestbuy\.com\/site\//.test(href)) {
              return true
            }
            // Match Target product URLs (adjust pattern if needed)
            if (/target\.com\/p\//.test(href)) {
              return true
            }
            // Add additional patterns here if needed
          }
          return false
        })
    })

    await browser.close()
    return productUrls
  } catch (error) {
    console.error(`Error fetching ${domain} with Puppeteer: ${error.message}`)
    return []
  }
}

// Crawl through the domains and collect product URLs
async function crawlDomains() {
  const productUrlsByDomain = {}

  for (const domain of urls) {
    console.log(`Crawling ${domain}...`)
    const productUrls = await fetchProductUrlsWithPuppeteer(domain)
    productUrlsByDomain[domain] = productUrls
    console.log(`Found ${productUrls.length} product URLs on ${domain}`)
  }

  // Save product URLs to a JSON file
  fs.writeFileSync(
    'product-urls.json',
    JSON.stringify(productUrlsByDomain, null, 2),
  )
  console.log('Crawling complete. Product URLs saved to product-urls.json')
}

// Start crawling
crawlDomains()
