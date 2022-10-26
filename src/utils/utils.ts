import dateformat from "dateformat";

export const dateFormat = (date: string): string => {
  return dateformat(new Date(date), "yyyy-mm-dd");
};
