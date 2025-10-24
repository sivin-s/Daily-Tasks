import puppeteer from 'puppeteer'


(async()=>{
    const URL_Amazon = 'https://www.amazon.com/s?k=mystery+books&_encoding=UTF8&content-id=amzn1.sym.d51c404a-da39-423c-9202-335828916db0&pd_rd_r=923ecb6b-01b8-4035-8c68-645d077299d6&pd_rd_w=yUnvM&pd_rd_wg=4WTGC&pf_rd_p=d51c404a-da39-423c-9202-335828916db0&pf_rd_r=9M9TB9VCCWEPWR1VAEDQ&ref=pd_hp_d_btf_unk'
    const browser = await puppeteer.launch({
        // headless: false,
        defaultViewport: false,
        userDataDir: './tmp' // dir store profile data like cache, cookies, history by default 'Default'.
    })
    const page = await browser.newPage()
    await page.goto(URL_Amazon)
   
    const productNodeList = await page.$$('.a-section.a-spacing-base.desktop-grid-content-view')
    let info=[]; 
    for(const node of productNodeList){
       try{
          const res  = await page.evaluate((node)=>{
          const img  =  node.querySelector('img')?.getAttribute('src')
          const title = node.querySelector('h2>span')?.textContent
          const price = node.querySelector('.a-price-whole')?.textContent
          return {img,title,price}
        },node)
        info.push(res)
       }catch(err){
          info={
            img: null,
            title: null,
            price: null
          }
       }
    }
     console.log(info)
     console.log(info.length)

    //  await browser.close()
})()