class Affilate{
    constructor(page){
        this.page=page;
        this .affilatebutton=page.getByRole('link', { name: 'Affiliate', exact: true });
        this.companyinput=page.getByRole('textbox', { name: 'Company' });
 this.WEbsiteinput=page.getByRole('textbox', { name: 'Web Site' });
this.TaxIdinput=page.getByRole('textbox', { name: 'Tax ID' });
this.ChequePayeeNameinput=page.getByRole('textbox', { name: '* Cheque Payee Name' });
this.continuebutton=page.getByRole('button', { name: 'Continue' });
 this.successAlert =  page. getByText('Success: Your affiliate');
}
async clickaffilate(){
    await this.affilatebutton.click();  
}
async fillaffiateform(company,website,taxid,chequepayee){
    await this.companyinput.fill(company);
    await this.WEbsiteinput.fill(website);
    await this.TaxIdinput.fill(taxid);
    await this.ChequePayeeNameinput.fill(chequepayee);
    await this.continuebutton.click();
}
}
module.exports={Affilate};