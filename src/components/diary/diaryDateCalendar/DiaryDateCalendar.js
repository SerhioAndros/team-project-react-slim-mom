import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./DiaryDateCalendar.module.css";
const DiaryDateCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className={css.div}>
      <div className={css.calendar_container}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd.MM.yyyy"
          maxDate={new Date()}
          showMonthDropdown
          className={css.date}
          timeIntervals
        />
      </div>
    </div>
  );
};

export default DiaryDateCalendar;
