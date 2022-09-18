/// <reference types="cypress" />

import { UserDetails } from "../../fixtures/UserDetails";
import { StudySetDetails } from "../../fixtures/StudySetDetails";
import SignUpPage from "../../pages/SignUpPage";
import StudySetPage from "../../pages/StudySetPage";
import { Urls } from "../../fixtures/Urls";
import SignInPage from "../../pages/SignInPage";

const userDetails = UserDetails();
const studySetDetails = StudySetDetails();

describe("Study smarter tests", () => {
  it("Sign up with email, Create and delete study set - successfully", () => {
    const signUpPage = new SignUpPage();
    const studySetPage = new StudySetPage();

    cy.visit(Urls.signUp);

    signUpPage.signUpWithEmail({ userDetails });
    studySetPage.create({ studySetDetails });
    studySetPage.delete({ studySetDetails });
  });

  it("Sign in with email - successfully", () => {
    const signInPage = new SignInPage();

    cy.visit(Urls.signIn);

    signInPage.signInWithEmail({ userDetails });
  });
});
