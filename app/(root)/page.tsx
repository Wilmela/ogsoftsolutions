import Hero from "@/components/Hero";

import { NewsLetter } from "@/components/NewsLetter";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Vision from "@/components/Vision";

const HomePage = async () => {
  return (
    <section>
      <div className="bg-APP_ASH dark:bg-transparent">
        
        <div className="bg-image-1 border-b">
          <Hero />
        </div>
      </div>

      <Vision />

      <div className="bg-APP_ASH dark:bg-transparent border-y">
        <Services />
      </div>

      <div className="dark:bg-transparent">
        <Partnership />
      </div>

      <div className="bg-APP_ASH dark:bg-transparent border-t-1 border-t">
        <NewsLetter />
      </div>
    </section>
  );
};

export default HomePage;
