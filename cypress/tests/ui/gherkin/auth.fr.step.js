import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("l'utilisateur n'est pas connecté", () => {
  // Do nothing
})

When("il se connecte en tant que {word}", (username) => {
  cy.login(username, "s3cret", { rememberUser: true })
})

Then("il doit être redirigé vers la page {word}", (page) => {
  let path = "";
  switch (page) {
    case "d'accueil":
      path = "/";
      break;
    default:
      page = `Unkown page ${ page } in the Gherkin test`;
  }
  cy.location("pathname").should("equal", page);
});