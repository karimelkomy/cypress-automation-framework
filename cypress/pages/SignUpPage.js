import SignUp from "../components/sign-up/SignUp";

export default class SignUpPage {
  constructor() {
    this.signUp = new SignUp();
  }

  async signUpWithEmail({ userDetails }) {
    this.signUp.submit({ userDetails });
  }
}
