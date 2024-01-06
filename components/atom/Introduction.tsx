import { fetchIntroText } from "@/lib/actions/intro.action";
import IntroCard from "./IntroCard";

type ExpectedResponse = {
  text: string;
};

const Introduction = async () => {
  const res: ExpectedResponse[] = await fetchIntroText();

  let index = 0;
  if (res.length > 2) {
    index += 1;
  } else {
    index = 0;
  }

  return (
    <>
      {res.length > 0 ? (
        <IntroCard text={res[index].text} />
      ) : (
        <p>No Introduction text</p>
      )}
    </>
  );
};

export default Introduction;
