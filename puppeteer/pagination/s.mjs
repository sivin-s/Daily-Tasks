import puppeteer from 'puppeteer'
import fs from 'fs'

(async()=>{
    const URL_Amazon = 'https://www.amazon.com/s?k=mystery+books&_encoding=UTF8&content-id=amzn1.sym.d51c404a-da39-423c-9202-335828916db0&pd_rd_r=923ecb6b-01b8-4035-8c68-645d077299d6&pd_rd_w=yUnvM&pd_rd_wg=4WTGC&qid=1759927323&xpid=V6uQemSArpxlr&ref=sr_pg_2k'
   try {
       const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: './tmp' // dir store profile data like cache, cookies, history by default 'Default'.
    })
    const page = await browser.newPage()
    await page.goto(URL_Amazon,{waitUntil:'load'})
   //  let info=[]; 
  
    let isDisabled=false;
  let i=0
   while(!isDisabled){
      console.log('hi')
       const productNodeList = await page.$$('.a-section.a-spacing-base.desktop-grid-content-view')
    for(const node of productNodeList){
       try{
          const res  = await page.evaluate((node)=>{
          const img  =  node.querySelector('img')?.getAttribute('src')
          const title = node.querySelector('h2>span')?.textContent
          const price = node.querySelector('.a-price-whole')?.textContent
          return {img,title,price}
        },node)
      //   info.push(res)
     if(!fs.existsSync('data\data.csv')){
         fs.mkdirSync('/data',{recursive: true})
         fs.writeFileSync('/data.csv','scarpered data...',{flag:'wx'})
     }
      fs.appendFile('/data/data.csv',`${res}`,(err)=>{throw new Error(err)})
       }catch(err){
          info={
            img: null,
            title: null,
            price: null
          }
          console.log(err)
       }
    }
       try{
         let  isNextDisabled=false;
        try{
           await page.waitForSelector('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator')
           isNextDisabled = await page.$('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator') === null // next btn 
        }catch(err){
           console.log('r>>>>>>>>',err)
           await browser.close()
        } 
   //  console.log('isDisable >> ',isdisabled)
        isDisabled = isNextDisabled
       if(!isDisabled){
         console.log('click')
         await page.click('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator')
       }
       }catch(err){
         console.log(err)
         // await browser.close
       }
       i++
   }

   //   console.log(info)
     console.log(info.length)
   } catch (err) {
      console.log(err)
      // await browser.close()
   }

     
})()

