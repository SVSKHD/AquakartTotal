import { Helmet } from "react-helmet";

const AquaSeoHead = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="keyphrase" content={props.keyphrase} />

        {/* canonical */}
        <link rel="canonical" href={props.link} />
      </Helmet>
    </>
  );
};
export default AquaSeoHead;
