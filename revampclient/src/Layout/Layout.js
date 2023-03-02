import AquaFooter from "./Footer";
import AquaNavScrollExample from "./Head";

const AquaLayout = (props) => {
  return (
    <>
      <AquaNavScrollExample />
      {props.children}
      <AquaFooter/>
    </>
  );
};
export default AquaLayout;
