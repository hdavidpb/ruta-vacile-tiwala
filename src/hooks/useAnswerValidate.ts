import { QuestionType } from "../redux/features/forms/interface";

import { getYearDifferenceBetweenActualDate } from "../utils/yearDifference";

const useAnswerValidate = () => {
  const isValidAnswer = (answer: string, type: QuestionType) => {
    if (type === QuestionType.date) {
      return getYearDifferenceBetweenActualDate(answer) >= 18;
    }

    if (type === QuestionType.email) {
      const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      return regex.test(answer);
    }
    if (type === QuestionType.amount) {
      const minValue = 1000000;
      const maxValue = 120000000;

      if (+answer >= minValue && +answer <= maxValue) {
        return true;
      } else {
        return false;
      }
    }
    if (type === QuestionType.number) {
      if (answer.length < 6) return false;
    }

    if (!answer.trim()) {
      return false;
    } else {
      return true;
    }
  };

  return { isValidAnswer };
};

export default useAnswerValidate;
