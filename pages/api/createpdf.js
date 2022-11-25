import puppeteer from 'puppeteer';


export default function handler(req, res) {
    console.log(req.body)
    let profile = req?.body;
    const url = `http://localhost:3000/`

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(content, { waitUntil: "networkidle0" });
    await page.goto(url, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
        printBackground: true,
        // headerTemplate: header,
        // footerTemplate: footer,
        format: "A4",
        displayHeaderFooter: true,
        margin: { top: "50px", bottom: "50px" },
    });

    await browser.close();
  }
  