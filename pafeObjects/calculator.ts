import { ElementFinder, element , by } from "protractor";

export class calculator
{
   fText:ElementFinder;
   sText:ElementFinder;
   go:ElementFinder;

   constructor(){
       this.fText=element(by.model("first"));
       this.sText=element(by.model("second"));
       this.go=element(by.id("gobutton"));

   }
}