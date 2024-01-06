"use client";

import { useDashboardContext } from "@/context";

const NewLetterSubs = () => {
  const { newsLetters } = useDashboardContext();

  return (
    <>
      {newsLetters?.length >= 1 ? (
        <ul>
          {newsLetters?.map((newsLetter: any) => (
            <li key={newsLetter._id}>{newsLetter.email}</li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          No subscribed email
        </p>
      )}
    </>
  );
};

export default NewLetterSubs;
