const{test,expect}=require("@playwright/test");
const{Homepage}=require("../pages/Homepage");
const{productpage}=require("../pages/productpage");
const{category}=require("../pages/category");

test("@sanity @regression Add to cart",async({page})=>{
    const homepage=new Homepage(page);
    const product=new productpage(page);
    const categorypage=new category(page);

    await homepage.gotopage();
    await homepage.clicklaptopslink();
    await homepage.clickshowalllaptopslink();
    await categorypage.clicklaptopsname('HP LP3065');
    
    await product.filldate();
    await product.clickaddtocart();

    await expect(product.Succesmg).toContainText('Success');
});