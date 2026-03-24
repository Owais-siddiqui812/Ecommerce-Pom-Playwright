class productpage {
    constructor(page){
        this.page=page;
        this.Addtocartbutton=page.getByRole('button', { name: 'Add to Cart' });
        this.DeliveryDatebox=page.getByRole('textbox', { name: '* Delivery Date' });
        this.Succesmg=page.getByText('Success: You have added HP');
        this.checkpoutbutton=page.getByRole('link', { name: ' Checkout' });
        //this.Addtowishlistbutton=page.getByRole('button', { name: 'Add to Wish List' }); 
        this.Addtowishlistbutton=page.locator("//div//button//i[@class='fa-solid fa-heart']");
        this.addtosuccessmsg=page.getByText('Success: You have added HP');

    }
    
    async filldate(){
        const DeliveryDate=new Date();
DeliveryDate.setDate(DeliveryDate.getDate()+5);

const mm=String(DeliveryDate.getMonth()+1).padStart(2,'0');
const dd=String(DeliveryDate.getDate()).padStart(2,'0');
const yyyy=String(DeliveryDate.getFullYear());

const formatedDate=`${yyyy}-${mm}-${dd}`;
await this.DeliveryDatebox.fill(formatedDate);

}

    async clickaddtocart(){
        await this.Addtocartbutton.click();
    }

    async clickcheckout(){
        await this.checkpoutbutton.click();
    }
    async clickaddtowishlist(){
        await this.Addtowishlistbutton.click();
    }
}
module.exports={productpage};
