import { cn } from "@/lib/utils";
import { ClientType } from "@/type/type";
import Image from "next/image";
import EditTab from "./EditTab";

const CustomerRemark = ({ _id, logo, info, remark }: ClientType) => {
  return (
    <section className="flex flex-col space-y-1 cursor-pointer h-[200px] relative">
      <div className="w-full flex items-center space-x-2">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden relative bg-white dark:bg-gray-800">
          <Image
            src={logo}
            fill
            alt="customer logo"
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <p className="poppins text-sm font-semibold">{info}</p>
        </div>
      </div>

      <p className="text-2xl font-bold text-muted-foreground leading-tight">
        “</p>
      <p
        className={cn(
          "p-text leading-tight tracking-tight light:text-black text-muted-foreground text-[14px] text-justify sm:text-base self-start"
        )}
      >
        {remark}
      </p>

      <EditTab href={`/dashboard/client/${_id}`} />
    </section>
  );
};

export default CustomerRemark;
