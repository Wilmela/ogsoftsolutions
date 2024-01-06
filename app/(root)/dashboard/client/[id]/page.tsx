import { findClient } from "@/lib/actions/client.action";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import ClientForm from "@/components/atom/ClientForm";
import { ClientType } from "@/type/type";

const ClientPage = async ({ params }: { params: { id: string } }) => {
  const client: ClientType = await findClient(params.id);

  return (
    <MaxWidthContainer className="paddingY">
      <div className="w-full sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto flex flex-col space-y-2">
        <ClientForm client={client} type="Update" />
      </div>
    </MaxWidthContainer>
  );
};

export default ClientPage;
