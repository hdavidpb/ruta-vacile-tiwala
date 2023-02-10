import { BsHandIndexThumb } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { setChangeAnswerValue } from "../redux/features/forms/formSlice";
import { IQuestion } from "../redux/features/forms/interface";
import { marks } from "../utils";
import { RootState } from "../redux/store";
import { SCButton } from "../styled-components/SCButton.styled-components";
import { SCSlider } from "../styled-components/SCSlider.styled-components";
import useAnswerValidate from "../hooks/useAnswerValidate";

interface Props {
  question: IQuestion;
  handleSetAnswerDone: (key: string, index: number) => void;
}

export const SliderAmount = ({ question, handleSetAnswerDone }: Props) => {
  const dispatch = useDispatch();
  const { answers, index } = useSelector(
    (store: RootState) => store.formReducer
  );
  const { isValidAnswer } = useAnswerValidate();

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch(
      setChangeAnswerValue({ key: question.key, value: newValue.toString() })
    );
  };

  const handleConfirmAmout = () => {
    handleSetAnswerDone(question.key, index);
  };

  return (
    <div className="slider-container">
      <NumericFormat
        valueIsNumericString
        type="tel"
        className="input-amout"
        value={answers["amount"]}
        thousandSeparator=","
        prefix="$"
        onValueChange={(e) =>
          dispatch(setChangeAnswerValue({ key: question.key, value: e.value }))
        }
      />
      {!isValidAnswer(answers[question.key], question.type) && (
        <p className="validate-amount-message">
          Recuerda que el valor minimo es de $1,000,000 y el maximo es de
          $120,000,000
        </p>
      )}

      <div className="finger-pointer">
        <BsHandIndexThumb size={30} />
      </div>
      <SCSlider
        value={+answers[question.key]}
        min={1000000}
        max={120000000}
        aria-labelledby="input-slider"
        step={100000}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleSliderChange}
        style={{ height: "8px" }}
      />
      <div className="amount-value-container">
        <SCButton
          disabled={!isValidAnswer(answers[question.key], question.type)}
          variant="contained"
          onClick={handleConfirmAmout}
        >
          Confirmar
        </SCButton>
      </div>
    </div>
  );
};
