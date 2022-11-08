import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { GenericMethodamz } from "../../support/genericMethodamz";
let obj = new GenericMethodamz();
Given("navigate to amazon site", () => {
  cy.log("given");
  cy.visit("/"); 
});
When("type samsung in textBox", () => {
    obj.inputText("samsung");
// obj.selectDropList('samsung m32')
obj.selectDinclude('samsung m32')
 
});
