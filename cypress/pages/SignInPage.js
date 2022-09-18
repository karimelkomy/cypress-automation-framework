import SignIn from "../components/sign-in/SignIn";

export default class SignInPage {
  constructor() {
    this.signIn = new SignIn();
  }

  async signInWithEmail({ userDetails }) {
    this.signIn.submit({ userDetails });
  }
}
