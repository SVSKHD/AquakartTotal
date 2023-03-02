import { Helmet } from "react-helmet";

const AquaSeoHead = (props) => {
  return (
    <>
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
    </>
  );
};
export default AquaSeoHead;
