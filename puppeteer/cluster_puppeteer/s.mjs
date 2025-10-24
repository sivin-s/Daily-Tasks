import {Cluster} from 'puppeteer-cluster'
import fs from 'fs'
import { url } from 'inspector'

(async()=>{
    const URLS_Amazon = [
     'https://www.amazon.com/s?k=PCs&_encoding=UTF8&content-id=amzn1.sym.8a64fefa-e450-4bbe-83a4-970ea696b46d&pd_rd_r=ba03d64a-d5b7-44e2-92a7-e647174dac1d&pd_rd_w=DE1dm&pd_rd_wg=4U63T&pf_rd_p=8a64fefa-e450-4bbe-83a4-970ea696b46d&pf_rd_r=XRGCGF1IB3UC9X4F5P2F&ref=pd_hp_d_btf_unk',
     'https://www.amazon.com/s?k=smartphones&_encoding=UTF8&content-id=amzn1.sym.69a935ef-cee6-41d5-aefa-c36bfc7821bc&pd_rd_r=ba03d64a-d5b7-44e2-92a7-e647174dac1d&pd_rd_w=1AkiP&pd_rd_wg=4U63T&pf_rd_p=69a935ef-cee6-41d5-aefa-c36bfc7821bc&pf_rd_r=ABM8C7AHC58E3TITCQO7&ref=pd_hp_d_btf_unk',
     'https://www.amazon.com/s?k=coffee+machine&_encoding=UTF8&content-id=amzn1.sym.8158743a-e3ec-4239-b3a8-31bfee7d4a15&pd_rd_r=bf159211-67b2-42e4-bcce-fc5a924293d1&pd_rd_w=qjsvK&pd_rd_wg=baPwo&pf_rd_p=8158743a-e3ec-4239-b3a8-31bfee7d4a15&pf_rd_r=BMH33DRTMFDH3FC7MKPD&ref=pd_hp_d_atf_unk'
   ]
    
   

   try {
 

       const cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_PAGE,
      maxConcurrency: 2,
      puppeteerOptions:{
         headless: false,
         defaultViewport: false,
         userDataDir: './tmp'
      },
      monitor: true,
      retryLimit: 2,
      retryDelay: 2000,
      skipDuplicateUrls: true,
    })

    // error
      cluster.on('taskerror', (err, url) => {
      console.log(`Error crawling ${url}: ${err.message}`);
  });

   await cluster.task(async({page,data:url,worker})=>{
      // data:url -> renaming the url(alias)
      await page.goto(url,{waitUntil:'domcontentloaded'})

          let isDisabled=false;
  let i=0
   while(!isDisabled){
      console.log('hi')
       const productNodeList = await page.$$('.a-section.a-spacing-base.desktop-grid-content-view')
    for(const node of productNodeList){
       try{
          const res  = await page.evaluate((node)=>{
          const img  =  node.querySelector('img')?.getAttribute('src') ?? null
          const title = node.querySelector('h2>span')?.textContent ?? null 
          const price = node.querySelector('.a-price-whole')?.textContent ?? null
          return {img,title,price}
        },node)
      //   info.push(res)
     if(!fs.existsSync('./data/data.json')){
         fs.mkdirSync('./data',{recursive: true})
     }
        try {
            const jsonObj =  JSON.stringify(res,null,2)
          fs.appendFileSync('./data/data.json',`${jsonObj},\n`,"utf8")
        } catch (err) {
         console.log(err)
        }
   
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
        } 
   //  console.log('isDisable >> ',isdisabled)
        isDisabled = isNextDisabled
       if(!isDisabled){
         console.log('click')
         await page.click('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator')
       }
       }catch(err){
         console.log(err)
       }
       i++
   }

   //   console.log(info)
     console.log(info.length)

   
    })

    // queue
    for(const url of URLS_Amazon){
      await cluster.queue(url)
    }

  await cluster.idle();
  await cluster.close();
  
   } catch (err) {
      console.log(err)
   }

     
})()

