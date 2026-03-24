class loginpage {
    constructor(page){
        this.page=page;
        this.emailinput=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordinput=page.getByRole('textbox', { name: 'Password' });
        this.loginbutton=page.getByRole('button', { name: 'Login' });
        this.myaccountheading=page.locator('h1');
    }
    async loginuser(username,password){
        await this.emailinput.fill(username);
        await this.passwordinput.fill(password);
        await this.loginbutton.click();
    }
   
}
module.exports={loginpage};