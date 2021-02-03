import React from "react";
import Content from "./Container";
import { useHistory } from "react-router-dom";
const Section = () => {
  const history = useHistory();
  return (
    <Content>{localStorage.getItem("error") && history.push("/")}</Content>
  );
};

export default Section;
