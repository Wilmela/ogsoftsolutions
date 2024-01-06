import MaxWidthContainer from "./MaxWidthContainer";
import NewsLetterForm from "./atom/NewsLetterForm";

export const NewsLetter = () => {
  return (
    <MaxWidthContainer className="paddingY">
      
      <h1 className="main-heading">
        News Letter
      </h1>
      <h3 className="main-desc">
        we are in an exciting times, let&apos;s keep you posted.
      </h3>

      <NewsLetterForm />
    </MaxWidthContainer>
  );
};
