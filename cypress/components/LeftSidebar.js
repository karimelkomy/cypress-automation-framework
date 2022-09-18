export default class LeftSidebar {
  get setsLink() {
    return cy.get("a").contains("Sets");
  }

  navigateToSetsPage() {
    this.setsLink.click();
  }
}
