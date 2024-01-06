import { findTeamMember } from "@/lib/actions/team.action";
import { TeamMemberProps } from "@/type/type";
import TeamForm from "@/components/atom/TeamForm";
import MaxWidthContainer from "@/components/MaxWidthContainer";

const TeamPage = async ({ params }: { params: { id: string } }) => {
  const member: TeamMemberProps = await findTeamMember(params.id);

  return (
    <MaxWidthContainer className="paddingY">
      <div className="w-full sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto flex flex-col space-y-2">
        <TeamForm member={member} type="Update" />
      </div>
    </MaxWidthContainer>
  );
};

export default TeamPage;
