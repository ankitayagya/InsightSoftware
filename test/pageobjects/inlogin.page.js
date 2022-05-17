class loginpage{

    opnebrowser(path){
    
        browser.url(path);
    }
    
    get logo(){
        return $(".//li[@id='mega-menu-item-19018']/a");
    }
    
    }
    
    export default new loginpage();