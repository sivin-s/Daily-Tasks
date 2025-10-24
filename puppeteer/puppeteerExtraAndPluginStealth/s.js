const puppeteer = require("puppeteer-extra")

// add stealth plugin and use defaults (all evasion techniques)
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

// puppeteer usage as normal
puppeteer.launch({
     headless: false,
     executablePath:"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe",
     userDataDir: "C:\Users\hi\AppData\Local\BraveSoftware\Brave-Browser\User Data",
    //  args:[ // proxy
    //     "--proxy-server=http://"
    //  ]
     }).then(async browser => {
  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
  await page.goto("https://bot.sannysoft.com")
  await page.screenshot({ path: "./testresult.png", fullPage: true })
  await browser.close()
})