export default class SignIn {
  get emailInput() {
    return cy.get("input[name=email]");
  }
  get signInButton() {
    return cy.get('button[type="submit"]');
  }

  fillEmail({ userDetails }) {
    this.emailInput.type(userDetails.email);
  }

  clickSignInButton() {
    this.signInButton.click();
  }

  submit({ userDetails }) {
    this.fillEmail({ userDetails });
    this.clickSignInButton();
  }
}
