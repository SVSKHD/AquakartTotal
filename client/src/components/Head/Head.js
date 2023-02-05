import React from "react";
import { Helmet } from "react-helmet";
const SeoHead = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
    </>
  );
};
export default SeoHead;
