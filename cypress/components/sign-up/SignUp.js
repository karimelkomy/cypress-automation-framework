export default class SignUp {
  get emailInput() {
    return cy.get("input[name=email]");
  }
  get signUpButton() {
    return cy.get('button[type="submit"]');
  }
  get loadingButton() {
    return cy.get("app-loading-button");
  }
  get continueButton() {
    return cy.get("app-onboarding-completed app-loading-button button");
  }
  get optionButton() {
    return cy.get("ui-list-option");
  }
  get countryDropdown() {
    return cy.get("app-country-selection-dropdown");
  }
  get dropdownItem() {
    return cy.get("ui-option");
  }
  get useSampleDocumentButton() {
    return cy.get("button").contains("Use sample document");
  }
  get gotItButton() {
    return cy
      .get("app-tutorial-card button", { timeout: 20000 })
      .contains("Got it");
  }

  clickContinueButton() {
    this.continueButton.click();
  }

  fillEmail({ userDetails }) {
    this.emailInput.type(userDetails.email);
  }

  clickSignUpButton() {
    this.signUpButton.click();
  }

  clickGetStartedButton() {
    this.loadingButton.contains("Get started").click();
  }

  selectSignUpReason({ userDetails }) {
    this.optionButton.contains(userDetails.signUpReason).click();
  }

  selectDevice({ userDetails }) {
    this.optionButton.contains(userDetails.device).click();
    this.loadingButton.contains("Continue").click();
  }

  selectCountry({ userDetails }) {
    this.countryDropdown.click();
    this.dropdownItem.contains(userDetails.country).click();
  }

  selectPlace({ userDetails }) {
    this.optionButton.contains(userDetails.place).click();
    this.optionButton.contains(userDetails.place).click();
  }

  selectSubject({ userDetails }) {
    this.optionButton.contains(userDetails.subject).click();
    this.loadingButton.contains("Continue").click();
  }

  clickUseSampleDocumentButton() {
    this.useSampleDocumentButton.click();
  }

  clickGotItButton() {
    this.gotItButton.click();
  }

  submit({ userDetails }) {
    this.fillEmail({ userDetails });
    this.clickSignUpButton();
    this.clickGetStartedButton();
    this.selectSignUpReason({ userDetails });
    this.selectDevice({ userDetails });
    this.selectCountry({ userDetails });
    this.selectPlace({ userDetails });
    this.selectSubject({ userDetails });
    this.clickContinueButton();
    this.clickUseSampleDocumentButton();
    this.clickGotItButton();
  }
}
