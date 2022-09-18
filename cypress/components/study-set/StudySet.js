export default class StudySet {
  get letsGoButton() {
    return cy
      .get("app-simple-dialog button", { timeout: 40000 })
      .contains("Let's go");
  }
  get createStudySetButton() {
    return cy.get("button").contains("Create Study Set");
  }
  get studySetCard() {
    return cy.get("app-studyset-card div");
  }

  clickLetsGoButton() {
    this.letsGoButton.click();
  }

  clickCreateStudySetButton() {
    this.createStudySetButton.click();
  }

  validateStudySetCard({ studySetDetails }) {
    this.studySetCard.should().contains(studySetDetails.name);
  }
}
