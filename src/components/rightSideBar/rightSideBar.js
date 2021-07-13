import React from "react";

const rightSideBar = () => {
  return (
    <div className="container">
      <div>
        <div>
          <h3 className="subTitle">Сводка за "date"</h3>

          <ul>
            <li>
              Осталось <span>000 ккал</span>
            </li>

            <li>
              Употреблено <span>000 ккал</span>
            </li>

            <li>
              Дневная норма <span>000 ккал</span>
            </li>

            <li>
              n% от нормы <span>000 %</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="subTitle">Нерекомендуемые продукты</h3>
          {/* <ul>
            <li>item</li>
          </ul> */}
          <p>Здесь будет отображаться Ваш рацион</p>
        </div>
      </div>
    </div>
  );
};

export default rightSideBar;
