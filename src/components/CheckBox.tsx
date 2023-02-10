import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setChangeAnswerValue } from "../redux/features/forms/formSlice";
import { IQuestion } from "../redux/features/forms/interface";
import { RootState } from "../redux/store";

interface Props {
  question?: IQuestion;
}

export const CheckBox = ({ question }: Props) => {
  const dispatch = useDispatch();
  const { answers } = useSelector((store: RootState) => store.formReducer);

  const handleCheck = (e: any) => {
    dispatch(
      setChangeAnswerValue({ key: question!.key, value: e.target.defaultValue })
    );
  };

  return (
    <FormControl>
      <FormLabel id={question?.key}>Selecciona alguna opción</FormLabel>
      <RadioGroup aria-labelledby={question?.key} name="radio-buttons-group">
        {question?.options?.map((option) => (
          <FormControlLabel
            checked={option.value === answers[question.key]}
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            onChange={handleCheck}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
