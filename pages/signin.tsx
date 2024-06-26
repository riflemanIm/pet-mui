import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { currentUserState } from "atoms";
import { useRecoilValue } from "recoil";
import SignIn from "components/SignIn";

const PageSignIn: NextPage = () => {
  const currentUser = useRecoilValue(currentUserState);
  useEffect(() => {
    if (currentUser) {
      Router.push("/");
    }
  }, [currentUser]);
  return <SignIn />;
};

export default PageSignIn;
