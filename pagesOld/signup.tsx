import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { currentUserState } from "../srcOld/atoms";
import { useRecoilValue } from "recoil";
import SignUp from "components/SignUp";

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
