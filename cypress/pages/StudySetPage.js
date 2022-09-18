import LeftSidebar from "../components/LeftSidebar";
import CreateStudySet from "../components/study-set/CreateStudySet";
import StudySet from "../components/study-set/StudySet";
import StudySetCard from "../components/study-set/StudySetCard";

export default class StudySetPage {
  constructor() {
    this.leftSidebar = new LeftSidebar();
    this.studySet = new StudySet();
    this.studySetCard = new StudySetCard();
    this.createStudySet = new CreateStudySet();
  }

  async create({ studySetDetails }) {
    this.leftSidebar.navigateToSetsPage();
    this.studySet.clickLetsGoButton();
    this.studySet.clickCreateStudySetButton();
    this.createStudySet.submit({ studySetDetails });
    this.studySetCard.validateStudySetCard({ studySetDetails });
  }

  async delete({ studySetDetails }) {
    this.studySetCard.deleteStudySetCard({ studySetDetails });
    this.studySetCard.validateStudySetCardRemoved({ studySetDetails });
  }
}
