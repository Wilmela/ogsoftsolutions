import { fetchNewLetters } from "@/lib/actions/news-letter.action";
import { customerReview } from "./customer-review";

export const INFO = [
  {
    title: "Clients",
    value: `${customerReview.length}`,
    desc: "Total clients",
  },
  {
    title: "News Letter",
    value: "20",
    desc: "Total news letter sign up",
  },
  {
    title: "Open Issues",
    value: "20",
    desc: "Total open issues",
  },
  // {
  //   title: "Closed Issues",
  //   value: "20",
  //   desc: "Total closed issues",
  // },
];
