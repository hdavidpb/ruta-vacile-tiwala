import { IQuestion } from "../redux/features/forms/interface";
import { POLICY } from "../utils";
import "./styles.css";

interface Props {
  question: IQuestion;
}

export const QuestionHeader = ({ question }: Props) => {
  return (
    <div className="question-contianer">
      <span>
        <h1 className="question">{question.question} </h1>
        {question.policy && (
          <a href={POLICY} target="_blank" className="question authorization">
            {question.policy}
          </a>
        )}
      </span>
    </div>
  );
};
