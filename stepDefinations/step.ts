import { Given, Then } from "cucumber";
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from "q";
import { calculator } from '../pafeObjects/calculator';
let cal=new calculator();

         Given('I will navigate to calc site', async ()=> {
           
            await browser.get('http://juliemr.github.io/protractor-demo/');
          });
 
          Then('I add x numberss {string} and {string}', async (string, string2)=> {
            await cal.fText.sendKeys(string);
            await cal.sText.sendKeys(string2);
          });
 
          Then('The output displayed shoudld be {string}', async(string)=> {
            await cal.go.click();
            await element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(string)
            {
               console.log(string);
            })
          });