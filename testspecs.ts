import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from 'q';
import { calculator } from './pafeObjects/calculator';
import { angularHome } from './pafeObjects/anugularHome';
describe('Chain locators demo',()=> {  


    it('Open Angular js website',async()=> {
      let cal= new calculator();
              browser.get('http://juliemr.github.io/protractor-demo/');
              //repeater ,  chain locators, And css for identical tags
              await cal.fText.sendKeys("3");
              await cal.sText.sendKeys("5");
    
              await cal.go.click();
    
              element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
               {
    
                  console.log(text);
               })
    
    
    // element(by.model("operator")).element(by.css("option:nth-child(4)")).click()
    
    })

    it("second test",async()=>
    {
     let angu=  new angularHome();
      browser.get('https://angularjs.org/');     
      await angu.linkText.click();
      await angu.searchBox.sendKeys("hello");
    })
    
    })