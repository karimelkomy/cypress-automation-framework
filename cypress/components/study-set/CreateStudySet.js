export default class CreateStudySet {
  get studySetNameInput() {
    return cy.get('input[id="text"]');
  }
  get createStudySetButton() {
    return cy.get("button").contains("Create Study Set");
  }

  fillStudySetName({ studySetDetails }) {
    this.studySetNameInput.type(studySetDetails.name);
  }

  clickCreateStudySetButton() {
    this.createStudySetButton.click();
  }

  submit({ studySetDetails }) {
    this.fillStudySetName({ studySetDetails });
    this.clickCreateStudySetButton();
  }
}
