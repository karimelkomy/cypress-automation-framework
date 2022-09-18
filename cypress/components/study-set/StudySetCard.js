export default class StudySetCard {
  get studySetCard() {
    return cy.get("app-studyset-card .subject-card-header-container div", {
      timeout: 20000
    });
  }
  get dropdownButton() {
    return cy.get(
      "app-studyset-card .subject-card-header-container .subject-icons-wrapper"
    );
  }
  get deleteButton() {
    return cy.get("button").contains("Delete");
  }
  get yesButton() {
    return cy.get("mat-dialog-actions button").contains("Yes");
  }

  validateStudySetCard({ studySetDetails }) {
    this.studySetCard.contains(studySetDetails.name).should("be.visible");
  }

  validateStudySetCardRemoved({ studySetDetails }) {
    this.studySetCard.contains(studySetDetails.name).should("not.exist");
  }

  deleteStudySetCard() {
    this.dropdownButton.first().click();
    this.deleteButton.click();
    this.yesButton.click();
  }
}
