import { IQuestion } from "../redux/features/forms/interface";
import { useDispatch, useSelector } from "react-redux";
import { setNextOrPreviusQuestion } from "../redux/features/forms/formSlice";
import { RootState } from "../redux/store";
import { SCButton } from "../styled-components/SCButton.styled-components";

import "./styles.css";
interface Props {
  question: IQuestion;
}

export const NavigationButtons = ({ question }: Props) => {
  const { index } = useSelector((store: RootState) => store.formReducer);
  const dispatch = useDispatch();

  const handleChangeQuestion = (isNext: boolean) => {
    dispatch(setNextOrPreviusQuestion({ index, isNext }));
  };

  return (
    <div className="navegation-btns">
      <SCButton
        disabled={!index}
        disableElevation
        size="small"
        variant="contained"
        onClick={() => handleChangeQuestion(false)}
      >
        {/* <IoIosArrowUp /> */}
        Anterior
      </SCButton>
      <SCButton
        disabled={!question.isDone}
        disableElevation
        size="small"
        variant="contained"
        onClick={() => handleChangeQuestion(true)}
      >
        {/* <IoIosArrowDown /> */}
        Siguiente
      </SCButton>
      <span>
        Powered by <h6>Neero S.A.S</h6>
      </span>
    </div>
  );
};
