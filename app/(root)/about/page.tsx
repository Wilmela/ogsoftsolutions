import { fetchTeamMembers } from "@/lib/actions/team.action";
import SkeletonComp from "@/components/atom/SkeletonComp";
import TeamMember from "@/components/atom/TeamMember";
import Link from "next/link";
// import { team } from "@/constants/team";
import { Suspense } from "react";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = async () => {
  const team = await fetchTeamMembers();

  return (
    <section>
      <MaxWidthContainer className="paddingY">
        <>
          <h1 className="main-heading">A bit more about us</h1>
          <h3 className="main-desc">We epitomize excellent service.</h3>
          {/* Text */}
          <div className="md:flex md:gap-6">
            <div>
              <p className="p-text md:text-justify">
                Welcome to OGSoft Solutions Limited, where innovation meets
                expertise. We have been in operation across Africa for over 5
                years now. As trailblazers in the digital realm, we specialize
                in designing, implementing, and optimizing state-of-the-art web
                and mobile-based online systems. Our passionate team of skilled
                developers collaborates seamlessly to deliver solutions that
                redefine industry standards.
                <br />
                <br />
                At the heart of our success is a commitment to excellence.
                Partnering with seasoned developers, we not only meet but exceed
                expectations, creating world-class solutions tailored to your
                unique needs. Our focus extends beyond innovation to ensure
                efficient resource utilization and swift turnaround times,
                providing you with a competitive edge in the digital landscape.
              </p>
            </div>
            <div>
              <p className="p-text md:text-justify">
                Beyond the ordinary, our tech conferences are transformative
                experiences. Our goal is to create events that resonate,
                engaging audiences through captivating presentations, fostering
                thought-provoking discussions, and inspiring fresh ideas. Join
                us on a journey where excellence is not just a goal; it&apos;s a
                standard we live by. Let&apos;s shape the future together, where
                your success is our mission.
                <br />
                <br />
                Experience the OGSoft Solutions Limited difference — where
                cutting-edge technology meets unparalleled dedication. Elevate
                your digital journey with us, and discover the limitless
                possibilities that innovation, expertise, and commitment can
                bring to your business.
              </p>
            </div>
          </div>
        </>
        {/* Team */}
        <div className="p-4 my-4 lg:my-6">
          <h1 className="main-heading">Meet our team</h1>
          <h3 className="main-desc">
            We are team of experts in business and tech.
          </h3>
          {team.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cole-5 gap-4 my-8">
              {team.map((member: any) => {
                return (
                  <Suspense fallback={<SkeletonComp />} key={member.fullName}>
                    <TeamMember
                      _id={member._id}
                      photo={member.photo}
                      fullName={member.fullName}
                      position={member.position}
                      detail={member.detail}
                    />
                  </Suspense>
                );
              })}
            </div>
          ) : (
            <Link
              href="/dashboard"
              className="p-text text-center hover:text-blue-900"
            >
              <p>No team member. Click to add.</p>
            </Link>
          )}
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default About;
