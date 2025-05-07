import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { currentUserState } from "../srcOld/atoms";
import { useRecoilValue } from "recoil";
import SignIn from "views/components/SignIn";

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
