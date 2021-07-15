import React, {useState} from 'react';
import DiaryDateCalendar from '../components/diary/diaryDateCalendar/DiaryDateCalendar';
import DiaryAddProductForm from '../components/diary/diaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from '../components/diary/diaryProductsList/DiaryProductsList';
import {
  DiaryPageContainer,
  DiaryPageInnerContainer
} from './diaryPage.module.css';
import RightSideBar from '../components/rightSideBar/RightSideBar';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import {useSelector} from 'react-redux';
import {isAppMobile} from '../redux/appState/appStateSelector';
import styles from '../components/diary/diaryAddProductForm/DiaryAddProductForm.module.css'; // TODO - move used styles
import sprite from '../images/diary/sprite.svg';

export default function DiaryPage() {
  const isMobile = useSelector(isAppMobile);

  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className={DiaryPageContainer}>
      <div className={DiaryPageInnerContainer}>
        <Container>
          <Section>
            <DiaryDateCalendar />
            {(!isMobile || isModal) && (
              <DiaryAddProductForm
                isModal={isModal}
                toggleModal={toggleModal}
              />
            )}
            {(!isMobile || !isModal) && <DiaryProductsList />}
            {isMobile && !isModal && (
              <button
                className={styles.buttonSubmit}
                type="button"
                onClick={toggleModal}
              >
                <svg className={styles.icon}>
                  <use href={sprite + '#whiteCross'} />
                </svg>
              </button>
            )}
            {isMobile && isModal && (
              <button
                className={styles.buttonArrow}
                type="button"
                onClick={toggleModal}
              >
                <svg width="30" height="20">
                  <use href={sprite + '#arrow'} />
                </svg>
              </button>
            )}
          </Section>
        </Container>
      </div>
      <RightSideBar />
    </div>
  );
}
