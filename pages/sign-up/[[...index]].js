import { ClerkLoaded, SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <ClerkLoaded>
    <div className="cl-wrapper">
      <div className="cl-custom-header">You need to sign up to continue</div>
      <SignUp path="/sign-up" routing="path" />
    </div>
  </ClerkLoaded>
);

export default SignUpPage;
