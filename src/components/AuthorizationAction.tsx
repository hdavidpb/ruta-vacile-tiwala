import { useDispatch, useSelector } from "react-redux";

import { IQuestion } from "../redux/features/forms/interface";
import {
  setQuestionsAsDone,
  setChangeAnswerValue,
} from "../redux/features/forms/formSlice";
import { sendDataWebHook } from "../redux/features/services";
import { AppDispatch, RootState } from "../redux/store";
import { SCButton } from "../styled-components/SCButton.styled-components";

interface Props {
  question: IQuestion;
}

export const AuthorizationAction = ({ question }: Props) => {
  const { isSending, index } = useSelector(
    (store: RootState) => store.formReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SCButton
      disabled={isSending}
      variant="contained"
      onClick={() => {
        dispatch(setChangeAnswerValue({ key: question.key, value: true }));
        dispatch(setQuestionsAsDone({ key: question.key, index }));
        dispatch(sendDataWebHook());
      }}
    >
      {isSending ? "Autorizando y enviando..." : "  Autorizar y finalizar"}
    </SCButton>
  );
};
