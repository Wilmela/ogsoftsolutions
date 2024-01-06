import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Megatron = () => {
  return (
    <div id="Megatron HMS">
      <h1 className="main-heading">Megatron HMS</h1>
      <h1 className="main-desc">World class HMS</h1>

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
            Welcome to MegatronHMS - Your Comprehensive Hospital Management
            Solution At MegatronHMS, we understand the critical importance of an
            efficient and streamlined healthcare management system. Our
            cutting-edge Hospital Management System is designed to meet the
            diverse needs of modern healthcare facilities, ensuring seamless
            operations, enhanced patient care, and optimized resource
            utilization. Explore the array of features that set MegatronHMS
            apart as the ultimate solution for hospital management.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
        <div>
          <p className="p-text lg:text-justify">
            1.{" "}
            <strong className={cn("poppins")}>Customizable Casenotes: </strong>
            MegatronHMS empowers healthcare professionals with a robust system
            for creating and managing customizable casenotes. Tailor patient
            records to your specific requirements, ensuring that relevant
            information is always at your fingertips. <br />
            2. {" "}
            <strong className="poppins">Lab Test Request: </strong>
            Effortlessly manage lab test requests within the system, reducing
            manual paperwork and minimizing errors. MegatronHMS streamlines the
            process from test requisition to result delivery, facilitating quick
            and accurate diagnosis.
            <br />
            3. <strong className="poppins">Blood Bank Management: </strong> Our
            integrated Blood Bank Management feature ensures efficient tracking
            of blood inventory, donations, and transfusions. This critical
            aspect of healthcare delivery is managed seamlessly, ensuring that
            blood products are readily available when needed.
            <br />
            4. <strong className="poppins">Antenatal Care: </strong> Optimize
            maternal healthcare with MegatronHMS&apos;s specialized Antenatal
            Care module. Monitor and track the progress of pregnancies, schedule
            appointments, and ensure the well-being of both the mother and the
            unborn child.
            <br />
            5. <strong className="poppins">Referral Management: </strong>{" "}
            Enhance collaboration between healthcare facilities through our
            Referral Management system. Streamline the process of patient
            referrals, ensuring that information is shared securely and promptly
            among different healthcare providers. <br />
            6. <strong className="poppins">Reports </strong> MegatronHMS
            provides comprehensive reporting tools, allowing healthcare
            administrators and professionals to generate detailed reports on
            various aspects of hospital operations, patient outcomes, and
            financial metrics.
            <br />
          </p>
        </div>
        <div>
          <p className="p-text lg:text-justify">
            7. <strong className="poppins">Vital Signs: </strong> Efficiently
            monitor and record vital signs with MegatronHMS. Our system ensures
            that critical patient data is accurately captured, facilitating
            timely interventions and personalized healthcare.
            <br />
            8. <strong className="poppins">Prescription: </strong>Simplify the
            prescription process with our integrated Prescription feature.
            Generate electronic prescriptions, track medication history, and
            improve overall medication management for enhanced patient safety.{" "}
            <br />
            9. <strong className="poppins">Bed Management: </strong> Optimize
            bed allocation and utilization through MegatronHMS&apos;s Bed
            Management module. Streamline patient admissions, transfers, and
            discharges, ensuring that beds are allocated efficiently to meet the
            dynamic needs of the hospital.
            <br />
            10. <strong className="poppins">ICD 10 Integration: </strong>{" "}
            MegatronHMS seamlessly integrates with the ICD-10 coding system,
            ensuring standardized coding for diseases, symptoms, and procedures.
            This integration enhances accuracy in medical documentation and
            facilitates efficient data exchange.
            <br />
            11. <strong className="poppins">
              Diagnostic Statistics:{" "}
            </strong>{" "}
            Gain valuable insights into diagnostic trends with
            MegatronHMS&apos;s Diagnostic Statistics feature. Analyze patterns,
            track disease prevalence, and make data-driven decisions to improve
            overall healthcare outcomes.
            <br />
            12. <strong className="poppins">Immunization: </strong> Efficiently
            manage and track immunization schedules with MegatronHMS. Ensure
            that patients receive timely vaccinations, reducing the risk of
            preventable diseases and promoting public health. Experience the
            power of MegatronHMS in transforming your hospital management
            practices. Our user-friendly interface, coupled with advanced
            features, makes us the ideal choice for healthcare institutions
            committed to delivering high-quality patient care. Join us on the
            journey towards a smarter and more efficient healthcare ecosystem.
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
        Check out MegatronHMS
      </Link>
    </div>
  );
};

export default Megatron;
