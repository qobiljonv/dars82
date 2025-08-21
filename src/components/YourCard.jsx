import { useDispatch, useSelector } from "react-redux";
import { removeDesert } from "../app/featurest/desertsSlise";

function YourCard() {
  const dispatch = useDispatch();
  const { deserts, totalAmount, totalPrise } = useSelector(
    (store) => store.deserts
  );

  return (
    <div className="your__card">
      <h2 className="your__card-title">Your Cart ({totalAmount})</h2>

      {!totalAmount && (
        <div className="your__card-box">
          <img
            className="your__card-image"
            src="../images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="your__card-text">Your added items will appear here</p>
        </div>
      )}

      {totalAmount > 0 && (
        <div className="your__card-content">
          <ul className="your__card-list">
            {deserts.map((item) => (
              <li key={item.id} className="your__card-item">
                <div className="your__card__box">
                  <div>
                    <h4 className="your__card-name">{item.name}</h4>
                    <p className="your__card-details">
                      <span className="amount">{item.amount}x</span>
                      <span className="price">@ ${item.price.toFixed(2)}</span>
                      <span className="total">
                        ${(item.amount * item.price).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeDesert(item.id))}
                  >
                    <img src="../images/icon-remove-item.svg" alt="" />
                  </button>
                </div>
                <hr className="your__card-hr" />
              </li>
            ))}
          </ul>

          <div className="your__card-total">
            <p className="your__card__total-text">Order Total</p>
            <h3 className="your__card__total-price">
              ${totalPrise.toFixed(2)}
            </h3>
          </div>
          <div className="neutral__card">
            <img
              className="neutral__image"
              src="../images/icon-carbon-neutral.svg"
              alt=""
            />
            <p className="neutral__texts">
              <span className="neutral__text">This is a</span>
              <span className="neutral__bold"> carbon-neutral</span>
              <span className="neutral__text">delivery</span>
            </p>
          </div>
          <button className="order__btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
}

export default YourCard;
