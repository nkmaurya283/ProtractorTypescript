"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pafeObjects/calculator");
const anugularHome_1 = require("./pafeObjects/anugularHome");
describe('Chain locators demo', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let cal = new calculator_1.calculator();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        yield cal.fText.sendKeys("3");
        yield cal.sText.sendKeys("5");
        yield cal.go.click();
        protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log(text);
        });
        // element(by.model("operator")).element(by.css("option:nth-child(4)")).click()
    }));
    it("second test", () => __awaiter(this, void 0, void 0, function* () {
        let angu = new anugularHome_1.angularHome();
        protractor_1.browser.get('https://angularjs.org/');
        yield angu.linkText.click();
        yield angu.searchBox.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdHNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFFL0UseURBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCxRQUFRLENBQUMscUJBQXFCLEVBQUMsR0FBRSxFQUFFO0lBRy9CLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQyxHQUFPLEVBQUU7UUFDcEMsSUFBSSxHQUFHLEdBQUUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDbEIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN6RCx3REFBd0Q7UUFDeEQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBR3BHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7UUFHYiwrRUFBK0U7SUFFL0UsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxhQUFhLEVBQUMsR0FBTyxFQUFFO1FBRXpCLElBQUksSUFBSSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQzVCLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLENBQUMsQ0FBQyxDQUFBIn0=