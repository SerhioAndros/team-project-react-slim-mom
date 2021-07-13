import React from 'react';
import DiaryDateCalendar from '../components/diary/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../components/diary/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from '../components/diary/diaryProductsList/DiaryProductsList';
import {
  DiaryPageContainer,
  DiaryPageInnerContainer
} from './DiaryPage.module.css';
import RightSideBar from '../components/rightSideBar/RightSideBar';

export default function DiaryPage() {
  return (
    <div className={DiaryPageContainer}>
      <div className={DiaryPageInnerContainer}>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
      <RightSideBar />
    </div>
  );
}
