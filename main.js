const ChromeWebScraper = require('./src/chrome-web-store-scraper');
const scraper = new ChromeWebScraper();

const fs = require('fs');

async function main() {
    scraper.search('scraper',{scrollAttempts:200,locale:'da'}).then(
        (res) => console.log(res[0]),
        (err) => console.log(err)
    );
    
    //scraper.scrapeApp('https://chrome.google.com/webstore/detail/vidiq-vision-for-youtube/pachckjkecffpdphbpmfolblodfkgbhl')
    // scraper.scrapeApp('https://chrome.google.com/webstore/detail/scraper-crawler-v3/kbhidgghgflkbalnkoeokcipocmigkfh')
    // .then(
    //     (res) => fs.writeFile(`${res.header.title.replace(' ', '_')}_scraping.json`,JSON.stringify(res,null,2),() => console.log('Output Saved')),
    //     (err) => console.log(err)
    // )
}

main()