import {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useDispatch} from 'react-redux';
import {setSelectedDate} from '../../../redux/diary/diaryActions';
import css from './DiaryDateCalendar.module.css';

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const chosenDate = `${year}-${month > 9 ? month : `0` + month}-${
      day > 9 ? day : `0` + day
    }`;
    dispatch(setSelectedDate(chosenDate));
  }, [dispatch, startDate]);

  return (
    <div className={css.div}>
      <div className={css.calendar_container}>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          maxDate={new Date()}
          showMonthDropdown
          className={css.date}
        />
      </div>
    </div>
  );
};

export default DiaryDateCalendar;
