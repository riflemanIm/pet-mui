import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useAppState } from "context/AppStateContext";
import SignUp from "views/SignUp";

const PageSignUp: NextPage = () => {
  const { currentUser } = useAppState();
  useEffect(() => {
    if (currentUser) {
      Router.push("/");
    }
  }, [currentUser]);
  return <SignUp />;
};

export default PageSignUp;
