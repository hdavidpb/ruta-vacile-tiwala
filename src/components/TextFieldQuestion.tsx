import { useDispatch, useSelector } from "react-redux";
import { setChangeAnswerValue } from "../redux/features/forms/formSlice";
import { IQuestion, QuestionType } from "../redux/features/forms/interface";
import { RootState } from "../redux/store";
import { documentOptions } from "../utils";
import { SimpleDropdown } from "./SimpleDropdown";
import { SCButton } from "../styled-components/SCButton.styled-components";
import { SCTextField } from "../styled-components/SCTextField.styled-components";
import useAnswerValidate from "../hooks/useAnswerValidate";

interface Props {
  handleSetAnswerDone: (key: string, index: number) => void;
  question: IQuestion;
}

export const TextFieldQuestion = ({ question, handleSetAnswerDone }: Props) => {
  const dispatch = useDispatch();
  const { answers, index } = useSelector(
    (store: RootState) => store.formReducer
  );
  const { isValidAnswer } = useAnswerValidate();

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    if (question.type === QuestionType.text) {
      const capitalice = value.charAt(0).toUpperCase();
      value = `${capitalice}${value.slice(1)}`;
    }

    dispatch(
      setChangeAnswerValue({
        key: question.key,
        value: value,
      })
    );
  };

  return (
    <form
      className="form-input-container"
      onSubmit={() => handleSetAnswerDone(question.key, index)}
    >
      {question.key === "cedula" && (
        <SimpleDropdown
          jsonKey="documentType"
          label="Tipo de documento"
          options={documentOptions}
        />
      )}
      <SCTextField
        autoFocus
        value={answers[question.key]}
        id="standard-basic"
        label="Escribe tu respuesta aquí"
        variant="standard"
        fullWidth
        type={question?.type ?? "text"}
        onChange={handleChangeValue}
      />
      <div className="button-container">
        <SCButton
          type="submit"
          disabled={!isValidAnswer(answers[question.key], question.type)}
          variant="contained"
        >
          Enviar
        </SCButton>
        <p>Presiona Enter ↵</p>
      </div>
    </form>
  );
};
