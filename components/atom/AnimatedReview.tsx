import CustomerRemark from "./CustomerRemark";
import { CarouselDiv } from "./CarouselDiv";
import { fetchClients } from "@/lib/actions/client.action";

const AnimatedReviews = async () => {
  const customerReview = await fetchClients();

  const eligibleClients = customerReview.filter(
    (cus: any) => cus.hasLogo === true
  );

  return (
    <div className="sm:absolute right-5 bottom-10 rounded-md w-full xxs:w-[400px] xxs:self-end sm:w-[300px] flex-col space-x-2 p-2  bg-gradient-to-tr from-zinc-200 via-blue-50/80 to-zinc-100 dark:bg-gradient-to-tr dark:from-[#020817] dark:via-blue-900/80 dark:to-zinc-900">
      {customerReview.length > 0 ? (
        <CarouselDiv
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          stopOnHover={true}
          showIndicators={false}
          showStatus={false}
        >
          {eligibleClients.map((review: any) => (
            <CustomerRemark
              key={review._id}
              _id={review._id}
              logo={review.logo}
              info={review.info}
              remark={review.remark}
              hasLogo={review.hasLogo}
            />
          ))}
        </CarouselDiv>
      ) : (
        <p className="poppins">Not review add yet.</p>
      )}
    </div>
  );
};

export default AnimatedReviews;
