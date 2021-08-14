import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <>
    <div className="cl-wrapper">
      <div className="cl-custom-header">You need to sign in to continue</div>
      <SignIn path="/sign-in" routing="path" />
    </div>
  </>
);

export default SignInPage;
