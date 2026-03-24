class category {
    constructor(page){
        this.page=page;
    }
    async clicklaptopsname(name){
        await this.page.locator('#product-list').getByText(name, { exact: true }).click();
    }
}
module.exports={category};