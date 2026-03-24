const {Homepage}=require("../pages/Homepage");
const {loginpage}=require("../pages/loginpage");
const {Affilate}=require("../pages/Affilate");
const{test,expect}=require("@playwright/test");
const dataset=JSON.parse(JSON.stringify(require("../utilis/NinjaDatasheet.json")));
const user=dataset.Sheet1;
const data=user.find(u=>u.username === "owaissidd001@gmail.com");
test("@regression Add to Affilate",async({page})=>{
    const homepage=new Homepage(page);
    const login=new loginpage(page);
    const affilate=new Affilate(page);

    await homepage.gotopage();
    await homepage.Myaccountclick();
    await homepage.clickloginlink();
    await login.loginuser(data.username,data.password);

    await page.waitForTimeout(2000);
    await affilate.clickaffilate();
    await affilate.fillaffiateform("Cloudberry","Clouidberry.services","1234567890","Owais Siddiqui");
    await expect(affilate.successAlert).toBeVisible();
});