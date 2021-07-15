import React from "react";
import DiaryDateCalendar from "../components/diary/diaryDateCalendar/DiaryDateCalendar";
import DiaryAddProductForm from "../components/diary/diaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "../components/diary/diaryProductsList/DiaryProductsList";
import {
  DiaryPageContainer,
  DiaryPageInnerContainer,
} from "./diaryPage.module.css";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

export default function DiaryPage() {
  return (
    <div className={DiaryPageContainer}>
      <div className={DiaryPageInnerContainer}>
        <Container>
          <Section>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsList />
          </Section>
        </Container>
      </div>
      {/* <Container>
        <Section> */}
      <RightSideBar />
      {/* </Section>
      </Container> */}
    </div>
  );
}
