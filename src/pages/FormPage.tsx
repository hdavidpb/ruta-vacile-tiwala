import { useSelector } from "react-redux";
import { useRef } from "react";
import { RootState } from "../redux/store";
import {
  QuestionImage,
  ConditionalQuestion,
  NavigationButtons,
  SliderAmount,
} from "../components";

import Questions from "../components/Questions";
import "./styles.css";
import { ShowDialog } from "../components/Dialog";

const FormPage = () => {
  const { isSendedForm } = useSelector((store: RootState) => store.formReducer);
  const formRef = useRef<HTMLDivElement>(null);
  const { questions, index } = useSelector(
    (store: RootState) => store.formReducer
  );

  return (
    <div ref={formRef} className="form-page-container disabled-scroll">
      {questions.map(
        (question, idx) =>
          index === idx && (
            <Questions key={idx}>
              <QuestionImage question={question} />
              <ConditionalQuestion question={question} />
              <NavigationButtons question={question!} />

              <>
                {isSendedForm && (
                  <ShowDialog bgColor="#6b0197" question={question} />
                )}
              </>
            </Questions>
          )
      )}
    </div>
  );
};

export default FormPage;
