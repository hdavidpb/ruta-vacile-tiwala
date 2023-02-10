import { LazyLoadImage } from "react-lazy-load-image-component";
import { IQuestion } from "../redux/features/forms/interface";
import { ProgressBar } from "./ProgressBar";
import image from "../assets/carnaval.jpg";
import loader from "../assets/gifty.gif";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
interface Props {
  question: IQuestion;
}

export const QuestionImage = ({ question }: Props) => {
  const { index, totalQuestions } = useSelector(
    (store: RootState) => store.formReducer
  );

  return (
    <div className="image-container">
      <LazyLoadImage
        src={question.image ?? image}
        alt="image-logo"
        effect="blur"
        placeholderSrc={loader}
      />
      {/* <img src={question.image ?? image} alt="image-logo" /> */}
      <ProgressBar index={index} totalQuestions={totalQuestions} />
    </div>
  );
};
