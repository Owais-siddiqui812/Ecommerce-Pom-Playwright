const {test,expect}=require("@playwright/test");
const {Homepage}=require("../pages/Homepage");

test("@sanity @regression TC01_Launch",async({page})=>{
const home=new Homepage(page);
await home.gotopage();
await home.pageverify(expect,"Your store of fun");
});
