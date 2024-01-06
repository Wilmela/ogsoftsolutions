"use client";
import { fetchClients } from "@/lib/actions/client.action";
import { useEffect, useState } from "react";
import CustomerRemark from "./CustomerRemark";
import Image from "next/image";

const ListOfClients = () => {
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    async function getClients() {
      try {
        const res = await fetchClients();
        setClients(res);
      } catch (error) {
        throw error;
      }
    }

    getClients();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.map((client: any) => (
        <div className="w-full flex items-center space-x-4 my-4" key={client._id}>
            
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden relative bg-white dark:bg-gray-800">
            <Image
              src={client.logo}
              fill
              alt="customer logo"
              className="object-contain"
            />
          </div>

          <div className="w-fit">
            <p className="p-text text-sm font-semibold">{client.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfClients;
