import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useAppState } from "context/AppStateContext";
import SignIn from "views/SignIn";

const PageSignIn: NextPage = () => {
  const { currentUser } = useAppState();
  useEffect(() => {
    if (currentUser) {
      Router.push("/");
    }
  }, [currentUser]);
  return <SignIn />;
};

export default PageSignIn;
