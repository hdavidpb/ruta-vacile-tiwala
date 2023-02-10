import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setChangeAnswerValue } from "../redux/features/forms/formSlice";
import { IOptions } from "../redux/features/forms/interface";
import { RootState } from "../redux/store";
interface Props {
  jsonKey: string;
  options: IOptions[];
  label: string;
}

export const SimpleDropdown = ({ jsonKey, label, options }: Props) => {
  const dispatch = useDispatch();
  const { answers } = useSelector((store: RootState) => store.formReducer);

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id={answers[jsonKey]}>{label}</InputLabel>
      <Select
        value={answers[jsonKey] ?? ""}
        labelId={answers[jsonKey]}
        id="documentType"
        label={label}
        onChange={(e) =>
          dispatch(
            setChangeAnswerValue({ key: jsonKey, value: e.target.value })
          )
        }
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
