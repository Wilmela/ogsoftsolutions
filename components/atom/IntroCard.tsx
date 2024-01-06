import EditTab from "./EditTab";

const IntroCard = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col space-y-1 w-fit white-gradient dark:bg-gradient-to-tr dark:from-[#020817] dark:via-blue-900/80 dark:to-zinc-900 p-4 rounded-md cursor-pointer relative">
      <h4 className="p-text max-w-[42ch] md:max-w-[45ch] lg:max-w-[55ch]">
        {text}
      </h4>

      <EditTab href="/dashboard"/>
    </div>
  );
};

export default IntroCard;
