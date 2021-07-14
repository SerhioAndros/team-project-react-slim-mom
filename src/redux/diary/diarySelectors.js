const getSelectedDate = state => state.diary.selectedDate;
const getMatchingProducts = state => state.diary.matchingProducts;
const getDailyEatenProducts = state => state.diary.dailyEatenProducts;

export const selectors = {
  getSelectedDate,
  getMatchingProducts,
  getDailyEatenProducts
};
