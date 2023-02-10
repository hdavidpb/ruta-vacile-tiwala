import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setChangeAnswerValue,
  setQuestionsAsDone,
} from "../redux/features/forms/formSlice";
import {
  IQuestion,
  OcupationType,
  QuestionType,
} from "../redux/features/forms/interface";
import { RootState } from "../redux/store";

interface Props {
  question: IQuestion;
}

export const Dropdown = ({ question }: Props) => {
  const dispatch = useDispatch();
  const { answers, index } = useSelector(
    (store: RootState) => store.formReducer
  );

  const handleSetAnswer = (key: string, value: string) => {
    dispatch(setChangeAnswerValue({ key, value }));
    if (key === "contractTypeOrPagadury") {
      dispatch(setQuestionsAsDone({ key: "ocupation", index: index }));

      return;
    }
    dispatch(setQuestionsAsDone({ key: key, index: index }));
  };

  return (
    <>
      {question?.type === QuestionType.dropdown && (
        <FormControl variant="standard" fullWidth>
          <InputLabel id={answers[question!.key]}>
            Seleccione una opción
          </InputLabel>
          <Select
            value={answers[question!.key] ?? ""}
            labelId={answers[question!.key]}
            onChange={(e) => handleSetAnswer(question!.key, e.target.value)}
          >
            {question!.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {question.type === QuestionType.checkbox && answers[question.key] && (
        <FormControl variant="standard" fullWidth>
          <InputLabel id="contractTypeOrPagadury">
            Tipo de contrato o pagaduria
          </InputLabel>
          <Select
            value={answers["contractTypeOrPagadury"]}
            labelId={answers[question!.key]}
            onChange={(e) =>
              handleSetAnswer("contractTypeOrPagadury", e.target.value)
            }
          >
            {question?.multiOptions![
              answers[question.key] as OcupationType
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};
