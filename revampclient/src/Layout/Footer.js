import Card from "react-bootstrap/Card";

const AquaFooter = () => {
  let date = new Date().getFullYear()
  return (
    <Card className="shadow-lg fixed-bottom">
      <Card.Body>This is some text within a card body.</Card.Body>
      <Card.Body>
        <div className="text-center">Aquakart {date}</div>
      </Card.Body>
    </Card>
  );
};

export default AquaFooter;
