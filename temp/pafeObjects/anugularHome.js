"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angularHome {
    constructor() {
        this.linkText = protractor_1.element(protractor_1.by.linkText("angular.io"));
        this.searchBox = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.angularHome = angularHome;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW51Z3VsYXJIb21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFmZU9iamVjdHMvYW51Z3VsYXJIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlEO0FBR3pELE1BQWEsV0FBVztJQUtwQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQVZELGtDQVVDIn0=