"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance..
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        //format:'json:./cucumberreports.json',
        format: 'json:./reports.json',
        require: [
            './stepDefinations/*.js'
        ]
    }
    // Options to be passed to Jasmine-node.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFOUQsd0RBQXdEO0lBQ3hELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1YsdUNBQXVDO1FBQ3ZDLE1BQU0sRUFBQyxxQkFBcUI7UUFDNUIsT0FBTyxFQUFFO1lBQ1Qsd0JBQXdCO1NBQUM7S0FDaEM7SUFFRyx3Q0FBd0M7Q0FFekMsQ0FBQyJ9