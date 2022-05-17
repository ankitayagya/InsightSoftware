//import loginpage from '../pageobjects/inlogin.page'

describe('Automation Scenario',()=>{
    it('Open the main URL and verify the logo',async()=>{
        const logo=$(".//li[@id='mega-menu-item-19018']/a");
        //inlogin.logo;
       await  browser.url('https://insightsoftware.com/bizview/');
        await expect(logo).toHaveHref("https://insightsoftware.com/")
        await browser.fullscreenWindow();
    });
    it('Navigate to the section Integrates with',async()=>{
        const infor=$(".//div[@id='block_data_sources']/div/ul/li[9]/a");
        await infor.click();
        await browser.pause(5000);
        const inforlawson=$(".//div[@id='infor']/div[2]/div/ul/li[3]/a");
        //await inforlawson.click();
        await expect(inforlawson).toHaveHref("https://insightsoftware.com/lawson/");
    });
    it('Navigate to 4 other tabs within the “Integrates with” (like Oracle, Microsoft, SAP, Deltek)',async()=>{
        const oracle=$(".//div[@id='block_data_sources']/div/ul/li/a");
        await oracle.click();
        const oracleList=$$(".//div[@id='oracle']/div[2]/div/ul/li/");
        console.log(oracleList.size());
        expect (oracleList.size()===12);
        const microsoft=$(".//div[@id='block_data_sources']/div/ul/li[3]/a");
        await microsoft.click();
        const microsoftList=$$(".//div[@id='microsoft']/div[2]/div/ul/li")
        expect (microsoftList.size()==9);
        const sap=$(".//div[@id='block_data_sources']/div/ul/li[4]/a");
        await sap.click();
        const sapList=$$(".//div[@id='sap']/div[2]/div/ul/li");
        expect (sapList.size()==7)
        const deltek=$(".//div[@id='block_data_sources']/div/ul/li[5]/a");
        await deltek.click();
        const deltekList=$$(".//div[@id='deltek']/div[2]/div/ul/li");
        expect (deltekList.size()==6);
    })


}

)