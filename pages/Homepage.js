class Homepage {
    constructor(page){
        this.page = page;
        this.myaccountlink=page.getByRole('link', { name: ' My Account ' });
        this.loginlink=page.getByRole('link', { name: 'Login' });
        this.laptopslink=page.getByRole('link', { name: 'Laptops & Notebooks', exact: true });
        this.showalllaptopslink=page.getByRole('link', { name: 'Show All Laptops & Notebooks' });

    }
    async gotopage(){
        await this.page.goto("https://www.cloudberrystore.services/");

    }
    async pageverify(expect,title){
        await expect(this.page).toHaveTitle(title);
    }
    async Myaccountclick(){
        await this.myaccountlink.click();
    }
    async clickloginlink(){
        await this.loginlink.click();
    }
    async clicklaptopslink(){
        await this.laptopslink.click();
    }
    async clickshowalllaptopslink(){
        await this.showalllaptopslink.click();
    }
    
}
module.exports={Homepage};