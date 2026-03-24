const{test,expect}=require("@playwright/test");
const{Homepage}=require("../pages/Homepage");
const{productpage}=require("../pages/productpage");
const{category}=require("../pages/category");
const{loginpage}=require("../pages/loginpage");
const dataset=JSON.parse(JSON.stringify(require("../utilis/NinjaDatasheet.json")));
const user=dataset.Sheet1;
const data=user.find(u=>u.username === "owaissidd001@gmail.com");

test("@regression Add to wishlist",async({page})=>{
    const homepage=new Homepage(page);
    const product=new productpage(page);
    const categorypage=new category(page);
    const login=new loginpage(page);

    await homepage.gotopage();
    await homepage.Myaccountclick();
    await homepage.clickloginlink();
    await login.loginuser(data.username,data.password);

    await homepage.clicklaptopslink();
    await page.waitForTimeout(2000);
    await homepage.clickshowalllaptopslink();
    await categorypage.clicklaptopsname('HP LP3065');
    
    await product.clickaddtowishlist();
    await expect(product.addtosuccessmsg).toBeVisible();
});