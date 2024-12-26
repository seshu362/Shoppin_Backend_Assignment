# E-Commerce Product URL Crawler

This project crawls multiple e-commerce websites like Amazon, eBay, and Walmart to extract product URLs from their search result pages. It uses Puppeteer to automate browsing and scraping, extracting relevant product links. The extracted product URLs are then saved into a JSON file for further use, such as for analyzing products, generating product lists, or tracking prices.

## Project Structure:
```
crawler-project/
│
├── index.js               # Main script to crawl the e-commerce URLs
├── urls.json              # JSON file containing the list of URLs to crawl
├── product-urls.json      # Output file where product URLs will be saved
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation (this file)
```

## 1. Features:
- Crawl multiple e-commerce websites (Amazon, eBay, Walmart, etc.)
- Extract product URLs from search result pages
- Save the URLs to a JSON file (`product-urls.json`)
- Handle dynamic pages with JavaScript content loading using Puppeteer

---

## 2. Technologies Used

- **Puppeteer**: A headless browser automation library for Node.js, used to automate web browsing and scraping. It helps in rendering pages that require JavaScript to load, ensuring product URLs are fetched from dynamic content.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used to run the crawler script.
- **npm**: Node.js package manager, used to manage dependencies.
- **JSON**: A lightweight data format used to store URLs for crawling and the extracted product URLs.

---

## 3. Configure `urls.json`

Before running the crawler, you need to configure the `urls.json` file. This file contains the list of URLs to crawl. Each URL should be a product search results page (like Amazon search results for laptops).

### Example `urls.json`:

```json
[
  "https://www.amazon.com/s?k=laptop",
  "https://www.ebay.com/sch/i.html?_nkw=laptop",
  "https://www.bestbuy.com/site/searchpage.jsp?st=laptop"
]
```

## 4. Installation

1. Run the following command to install the required Node.js packages::
```bash
   npm install
```
2. Now that you've configured the URLs and installed the dependencies, run the following command to start crawling:
```bash
   node index.js
```
   - This will start the crawler, and it will go through each URL specified in urls.json, extract the product URLs, and save them into product-urls.json.

## 5. Output

Once the crawler completes, it will generate a product-urls.json file with the extracted product URLs.

### Example Output `(product-urls.json)`:

```json
{
  "https://www.amazon.com/s?k=laptop": [
    "https://www.amazon.com/dp/B08N5M7S6K",
    "https://www.amazon.com/dp/B08Z6TYYD8",
    "https://www.amazon.com/dp/B09ND3H7V1"
  ],
  "https://www.ebay.com/sch/i.html?_nkw=laptop": [
    "https://www.ebay.com/itm/324968547970",
    "https://www.ebay.com/itm/123456789012"
  ],
  "https://www.bestbuy.com/site/searchpage.jsp?st=laptop": [
    "https://www.bestbuy.com/site/123456789012",
    "https://www.bestbuy.com/site/987654321098"
  ]
}
```

- Each URL in urls.json will have a corresponding list of product URLs found on the page.
- The URLs are extracted from search result pages, typically pointing to individual product pages.


## License.

This project is licensed under the MIT License.


### Summary of Sections in `README.md`:

1. **Feature and Project Details**: Describes the functionality and purpose of the project, including what the crawler does and how it works.
2. **Technologies Used**: Lists the technologies and libraries used in the project, including Puppeteer and Node.js.
3. **Configure `urls.json`**: Explains how to configure the `urls.json` file with the list of URLs to crawl.
4. **Run the Crawler**: Provides step-by-step instructions on how to clone the repository, install dependencies, and run the crawler.
5. **Output**: Shows an example of the output file (`product-urls.json`) with the extracted product URLs.

This file should help users understand the setup and usage of the project clearly. Let me know if you need any further adjustments!
