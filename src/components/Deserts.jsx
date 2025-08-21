import Card from "./Card";

function Deserts({ deserts }) {
  return (
    <div className="desserts__container">
      <h1 className="title">Desserts</h1>
      <div className="desert__container">
        <div className="deserts">
          {deserts.map((desert) => {
            return <Card key={desert.id} desert={desert} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Deserts;
