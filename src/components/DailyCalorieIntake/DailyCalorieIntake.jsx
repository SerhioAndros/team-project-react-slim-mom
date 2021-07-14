import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../../images/modal/sprite.svg';
import { DailyCalorieIntakeStyled } from './DailyCalorieIntakeStyled';

const DailyCalorieIntake = () => {


  const [value, setValue] = useState('');
  const onChange = event => setValue(event.target.value);

  
  return (
    <DailyCalorieIntakeStyled> 
      <div className='wrapper'>
      <p className='title'>
        Ваша рекомендуемая суточная норма калорий составляет
      </p>
      <div className='container'>
        <p className='caloriesText'>
          <span className='caloriesValue'>calories</span> ккал
        </p>
        <p className='productsTitle'>
          Продукты, которые вам не рекомендуется употреблять
        </p>

        <div className='inputWrapper'>
          <input
            className='input'
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
          />
          <span>
            <svg width="12" height="12">
              <use href={sprite + '#search-icon'} />
            </svg>
          </span>
        </div>

      
        <Link to="/registration" className='button'>
          Начать худеть
        </Link>
      </div>
    </div>
    </DailyCalorieIntakeStyled>
   
  );
};

export default DailyCalorieIntake;
