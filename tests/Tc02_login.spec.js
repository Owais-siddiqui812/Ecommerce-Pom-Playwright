const{test,expect}=require("@playwright/test");
const{Homepage}=require("../pages/Homepage");
const{loginpage}=require("../pages/loginpage");
const dataset=JSON.parse(JSON.stringify(require("../utilis/NinjaDatasheet.json")));
const user=dataset.Sheet1;

for(const data of user){ 

test(`@sanity @datadriven @regression Tc_02Login-${data.username}`,async({page})=>{
    const home=new Homepage(page);
    const login=new loginpage(page);
    await home.gotopage();
    await home.Myaccountclick();

    await home.clickloginlink();

    await login.loginuser(data.username,data.password);
    
    await expect(login.myaccountheading).toContainText("My Account");

});
}
