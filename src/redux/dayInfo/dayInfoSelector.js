// import { createSelector } from "@reduxjs/toolkit";
const getDayInfo = (state) => state.dayInfo;
const getSelectDate = (state) => state.diary.selectedDate;

// const getFilteredUserInfoSelector = createSelector(
//   [getUserInfo, getSelectDate],
//   (userInfo, date) => {
//     console.log(userInfo);
//     userInfo.find((info) => info.date === date);
//   }
// );

// console.log(getFilteredUserInfoSelector);

export { getDayInfo, getSelectDate };
