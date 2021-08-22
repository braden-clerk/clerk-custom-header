import { SignIn, ClerkLoaded } from "@clerk/clerk-react";

const SignInPage = () => (
  <>
    <ClerkLoaded>
      <div className="cl-wrapper">
        <div className="cl-custom-header">You need to sign in to continue</div>
        <SignIn path="/sign-in" routing="path" />
      </div>
    </ClerkLoaded>
  </>
);

export default SignInPage;
