import { useSelector, useDispatch } from "react-redux";
import {
  addDesert,
  desertsAmount,
  incrementDeserts,
  removeDesert,
} from "../app/featurest/desertsSlise";

function Card({ desert }) {
  const dispatch = useDispatch();
  const { deserts } = useSelector((store) => store.deserts);

  let isAdded = deserts.find((item) => item.id == desert.id);
  return (
    <div className="card">
      <picture>
        <source
          media="(min-width:996px )"
          srcSet={`${desert.image.desktop}`}
          sizes="250"
        />
        <source
          media="(min-width:768px )"
          srcSet={`${desert.image.tablet}`}
          sizes="213"
        />
        <source
          media="(min-width:375px )"
          srcSet={`${desert.image.mobile}`}
          sizes="327"
        />
        <img className="card__image" src={`${desert.image.thumbnail}`} alt="" />
      </picture>
      <div className="card__btn">
        {!isAdded && (
          <button
            onClick={() => dispatch(addDesert(desert))}
            className="card__add__to"
          >
            <img
              src="../images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        )}
        {isAdded && (
          <div className="card__btns__amount">
            <button
              onClick={() => dispatch(incrementDeserts(isAdded.id))}
              className="card__btn__amount"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </button>
            <span>{isAdded.amount}</span>
            <button
              onClick={() => {
                if (isAdded.amount == 1) {
                  dispatch(removeDesert(isAdded.id));
                } else {
                  dispatch(desertsAmount(isAdded.id));
                }
              }}
              className="card__btn__amount"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="card__body">
        <p className="card__category">{desert.category}</p>
        <p className="card__name">{desert.name}</p>
        <p className="card__price">${desert.price}</p>
      </div>
    </div>
  );
}

export default Card;
