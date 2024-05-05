import React, { useEffect } from "react";
import Router from "next/router";
import SignUp from "components/SignUp";
import { NextPage } from "next";
import { currentUserState } from "atoms";
import { useRecoilValue } from "recoil";

const PageSignUp: NextPage = () => {
  const currentUser = useRecoilValue(currentUserState);
  useEffect(() => {
    if (currentUser) {
      Router.push("/");
    }
  }, [currentUser]);
  return <SignUp />;
};

export default PageSignUp;
