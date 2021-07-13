import React from 'react';
import DiaryDateCalendar from '../components/diary/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../components/diary/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from '../components/diary/diaryProductsList/DiaryProductsList';
import {
  DiaryPageContainer,
  DiaryPageInnerContainer
} from './diaryPage.module.css';
import Sidebar from '../components/diary/Sidebar';

export default function diaryPage() {
  return (
    <div className={DiaryPageContainer}>
      <div className={DiaryPageInnerContainer}>
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </div>
      <Sidebar />
    </div>
  );
}
