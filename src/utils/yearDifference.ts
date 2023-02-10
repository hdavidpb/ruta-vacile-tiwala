import * as moment from "moment";

export function getYearDifferenceBetweenActualDate(
  birthDayDate: string
): number {
  const date = moment(birthDayDate);
  const actualDate = moment(Date.now());
  const yearDifference = actualDate.diff(date, "years");
  return yearDifference;
}
