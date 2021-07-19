import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import sprite from "../../images/modal/sprite.svg";
import { getFilterValue } from "../../redux/filter/filterActions";
import {
  filterSelector,
  getfilteredProductsSelector,
  productsSelector,
} from "../../redux/filter/filterSelectors";
import { DailyCalorieIntakeStyled } from "./DailyCalorieIntakeStyled";

const DailyCalorieIntake = ({ calories }) => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const filter = useSelector(filterSelector);
  const filteredProducts = useSelector(getfilteredProductsSelector);

  const onChange = (event) => {
    dispatch(getFilterValue(event.target.value));
  };

  return (
    <DailyCalorieIntakeStyled>
      <div className="wrapper">
        <p className="title">
          Ваша рекомендуемая суточная норма калорий составляет
        </p>
        <div className="container">
          <p className="caloriesText">
            <span className="caloriesValue">{calories}</span> ккал
          </p>
          <p className="productsTitle">
            Продукты, которые вам не рекомендуется употреблять
          </p>

          <div className="inputWrapper">
            <input
              className="input"
              type="text"
              name="filter"
              value={filter}
              onChange={onChange}
            />
            <span>
              <svg width="12" height="12">
                <use href={sprite + "#search-icon"} />
              </svg>
            </span>
          </div>
          <ol className="productsList">
            {filteredProducts
              ? filteredProducts?.map((product, index) => (
                  <li className="productsItem" key={index}>
                    {product}
                  </li>
                ))
              : products?.map((product, index) => (
                  <li className="productsItem" key={index}>
                    {product}
                  </li>
                ))}
          </ol>

          <Link to="/registration" className="button">
            Начать худеть
          </Link>
        </div>
      </div>
    </DailyCalorieIntakeStyled>
  );
};

export default DailyCalorieIntake;
