import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I'm not logged in", () => {
  // Do nothing
})

When("I login as {word}", (username) => {
  cy.login(username, "s3cret", { rememberUser: true })
})

Then("I should be redirected to the {word} page", (page) => {
  let path = "";
  switch (page) {
    case "Home":
      path = "/";
      break;
    default:
      page = `Unkown page ${ page } in the Gherkin test`;
  }
  cy.location("pathname").should("equal", page);
});