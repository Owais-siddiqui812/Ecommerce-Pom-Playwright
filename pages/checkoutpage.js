class checkoutpage{
    constructor(page){
        this.page=page;
        this.selectaddressbutton=page.locator('#input-shipping-address');
        this.shipingbutton=page.locator('#button-shipping-methods');
        this.conmtinues= page.getByRole('button', { name: 'Continue' });
        this.paymetnmethodbutton= page.locator('#button-payment-methods');

this.conmtinuep= page.getByRole('button', { name: 'Continue' });

this.confirmbutton=page.getByRole('button', { name: 'Confirm Order' });
this.succesmg=page.getByRole('heading', { name: 'Your order has been placed!' });
    }

    async clickselectaddress(){
        await this.selectaddressbutton.selectOption({'index': 1});
    }
    async clickshiping(){
        await this.shipingbutton.click();
        await this.conmtinues.click();
    }
    async clickpaymentmethod(){
        await this.paymetnmethodbutton.click();
        await this.conmtinuep.click();
    }
    async clickconfirm(){
        await this.confirmbutton.click();
    }
}
module.exports={checkoutpage};