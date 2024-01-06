import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const MegaCare = () => {
  return (
    <div id="MegaCare" className="my-4 lg:my-16">
      <h1 className="main-heading">MegaCare</h1>
      <h1 className="main-desc">
        Extending Compassionate Healthcare Beyond Boundaries!
      </h1>

      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        {/* Top */}
        <div className="p-4 flex-[0.4] ">
          <Image
            src="/mega-logo.png"
            width={200}
            height={200}
            alt="megatron logo"
            className="object-contain object-center"
          />
        </div>

        <div className="flex-1">
          <p className={cn("p-text font-semibold lg:text-justify")}>
            Welcome to MegaCare, an innovative offshoot of MegatronHMS,
            dedicated to elevating patient-centric healthcare experiences.
            MegaCare is designed with a focus on providing specialized tools and
            features that empower healthcare providers to deliver unparalleled
            patient care. Explore the unique capabilities that MegaCare brings
            to the forefront of healthcare management.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
        <div>
          <p className="p-text lg:text-justify">
            1. <strong className="poppins">Patient Engagement: </strong>{" "}
            MegaCare puts patients at the center of their healthcare journey.
            With intuitive interfaces and user-friendly portals, patients can
            actively engage in their care, access medical records, schedule
            appointments, and communicate securely with their healthcare
            providers.
            <br />
            2. <strong className="poppins">Telehealth Integration: </strong> In
            an era where remote healthcare is increasingly vital, MegaCare
            seamlessly integrates telehealth capabilities. Conduct virtual
            consultations, share medical information securely, and ensure
            continuous patient care regardless of physical location.
            <br />
            3.<strong className="poppins"> Wellness Tracking: </strong> Empower
            patients to take charge of their well-being with MegaCare&apos;s
            Wellness Tracking feature. Monitor lifestyle factors, track health
            metrics, and provide personalized health recommendations to promote
            preventive care.
            <br />
            4. <strong className="poppins">Patient Education: </strong>Enhance
            health literacy and promote informed decision-making with
            MegaCare&apos;s Patient Education resources. Deliver relevant and
            easily understandable health information to patients, fostering a
            collaborative approach to healthcare. <br />
            5. <strong className="poppins">
              Appointment Scheduling:{" "}
            </strong>{" "}
            Simplify the appointment management process with MegaCare&apos;s
            intuitive scheduling tools. Patients can conveniently book,
            reschedule, or cancel appointments, ensuring a seamless and
            efficient experience for both healthcare providers and patients.{" "}
            <br />
            6. <strong className="poppins">Remote Monitoring: </strong>
            Facilitate continuous care with MegaCare&apos;s Remote Monitoring
            capabilities. Monitor patients&apos; vital signs and health metrics
            remotely, allowing for early intervention and proactive healthcare
            management.
          </p>
        </div>
        <div>
          <p className="p-text lg:text-justify">
            7. <strong className="poppins">Medication Adherence: </strong>{" "}
            Improve medication adherence with MegaCare&apos;s Medication
            Adherence feature. Patients receive reminders and educational
            resources to ensure they follow prescribed medication regimens,
            leading to better health outcomes.
            <br />
            8. <strong className="poppins">
              Chronic Disease Management:{" "}
            </strong>{" "}
            Address the unique needs of patients with chronic conditions through
            MegaCare&apos;s Chronic Disease Management tools. Implement
            personalized care plans, track progress, and optimize treatment
            strategies for long-term health.
            <br />
            9.<strong className="poppins"> Secure Messaging : </strong> Promote
            secure and efficient communication between patients and healthcare
            providers with MegaCare&apos;s Secure Messaging system. Ensure that
            sensitive information is exchanged safely, fostering a transparent
            and trusting patient-provider relationship.
            <br />
            10. <strong className="poppins">Health Records Access: </strong>
            Enable patients to access their comprehensive health records
            securely through MegaCare. This transparency enhances patient
            empowerment and facilitates collaboration between healthcare
            professionals. <br />
            11.{" "}
            <strong className="poppins">
              Integration with Wearables:{" "}
            </strong>{" "}
            Harness the power of wearable technology to gather real-time health
            data. MegaCare seamlessly integrates with wearables, providing
            healthcare providers with additional insights and patients with a
            more holistic view of their health.
            <br />
            12. <strong className="poppins">Family Health Management: </strong>
            Simplify family healthcare coordination with MegaCare&apos;s Family
            Health Management features. Manage the health records of multiple
            family members, schedule appointments for dependents, and ensure
            cohesive healthcare for the entire family.
            <br />
            <br />
            MegaCare is not just a healthcare management system; it&apos;s a
            commitment to redefining the healthcare experience. Embrace a new
            era of patient-centered care with MegaCare, where technology meets
            compassion to create a healthier and more connected world.
          </p>
        </div>
      </div>
      <Link
        href="https://megatronhms.com/#!/home/aboutus"
        target="_blank"
        className={cn(
          "p-text hover:text-blue-900",
          buttonVariants({ variant: "link" })
        )}
      >
        Check out MegaCare
      </Link>
    </div>
  );
};

export default MegaCare;
