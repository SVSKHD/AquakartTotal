import React from "react";
import SeoHead from "../Head/Head";
import AquaFooter from "./Footer";
import AquaNavHead from "./Head";

const AquaLayout = (props) => {
  return (
    <>
      <AquaNavHead />
      <SeoHead title={props.seotitle} />
      {props.children}
      <AquaFooter />
    </>
  );
};
export default AquaLayout;
