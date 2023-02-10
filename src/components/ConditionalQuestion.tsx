import { useDispatch } from "react-redux";
import { setQuestionsAsDone } from "../redux/features/forms/formSlice";
import { IQuestion, QuestionType } from "../redux/features/forms/interface";
import {
  QuestionHeader,
  TextFieldQuestion,
  SliderAmount,
  CheckBox,
  Dropdown,
  AuthorizationAction,
} from "./index";
import "./styles.css";
interface Props {
  question: IQuestion;
}

export const ConditionalQuestion = ({ question }: Props) => {
  const dispatch = useDispatch();

  const handleSetAnswerDone = (key: string, index: number) => {
    dispatch(setQuestionsAsDone({ key, index }));
  };

  return (
    <div data-aos="fade-up" className="conditional-question-container">
      <QuestionHeader question={question} />

      {(question?.type === QuestionType.text ||
        question?.type === QuestionType.number ||
        question?.type === QuestionType.date ||
        question?.type === QuestionType.email) && (
        <TextFieldQuestion
          handleSetAnswerDone={handleSetAnswerDone}
          question={question}
        />
      )}

      {question?.type === QuestionType.amount && (
        <SliderAmount
          question={question}
          handleSetAnswerDone={handleSetAnswerDone}
        />
      )}

      {question?.type === QuestionType.checkbox && (
        <>
          <CheckBox question={question} />
          <Dropdown question={question} />
        </>
      )}
      {question?.type === QuestionType.dropdown && (
        <Dropdown question={question} />
      )}

      {question.type === QuestionType.authorization && (
        <AuthorizationAction question={question} />
      )}
    </div>
  );
};
