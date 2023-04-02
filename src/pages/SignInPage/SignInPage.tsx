import React from "react";
import { SignIn } from "../../components/SignIn/SignIn";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./SignInPage.module.css"

export const SignInPage = () => {

  return (
      <PageTemplate title={"Sign In"} linkName={"Back to home"} post={''}>
        <div className={styles.wrapper}>
          <SignIn />
        </div>
      </PageTemplate>
  )
}
