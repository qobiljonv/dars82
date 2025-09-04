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
      <div className="class__box">
        <h3 className="class__title">Mening Contactlarim</h3>
        <div>
          {" "}
          <a href="https://www.instagram.com/qob1ljon_224/" className="class">
            <img src="../images/instagram.png" alt="" />
          </a>
          <a href="https://t.me/Qobiljon_224" className="class">
            <img src="../images/telegram.png" alt="" />
          </a>
          <a href="tel:+998956472424" className="class">
            <img src="../images/phone.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Deserts;
