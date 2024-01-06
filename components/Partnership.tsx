import { MotionP } from "./atom/Motion";

const Partnership = () => {
  return (
    <section className="paddingY paddingX flex flex-col items-center">
      <h1 className="main-heading text-justify">Collaborate with Us</h1>
      <p className="main-desc">
        Forge Strategic Partnerships with OGSoft Solutions Limited.
      </p>
      <MotionP
        className="p-text md:max-w-[85ch] "
        whileInView={{
          x: [-200, 0],
        }}
        transition={{
          duration: 0.85,
          delay: 0.1,
        }}
      >
        Delve into the future of healthcare administration and financial
        transactions by exploring partnership opportunities with OGSoft
        Solutions Limited. Our Hospital Management System is designed to
        streamline operations, enhance patient care, and optimize efficiency.
        Additionally, we offer cutting-edge Crypto Payment Solutions to
        facilitate secure and seamless financial transactions. Partner with us
        to revolutionize healthcare services and financial transactions.
        Discover the potential for collaborative success and innovation by
        taking a step to partner with us.
      </MotionP>
    </section>
  );
};

export default Partnership;
