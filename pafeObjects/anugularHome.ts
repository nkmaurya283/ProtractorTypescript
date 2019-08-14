import { ElementFinder, element , by } from "protractor";


export class angularHome
{

    linkText:ElementFinder;
    searchBox:ElementFinder;
    constructor(){

        this.linkText=element(by.linkText("angular.io"));
        this.searchBox=element(by.css("input[type='search']"));
    }
}