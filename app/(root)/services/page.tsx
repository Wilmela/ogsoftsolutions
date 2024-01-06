import Megatron from '@/components/atom/Megatron';
import MegaCare from '@/components/atom/MegaCare';
import Ogcoin from '@/components/atom/Ogcoin';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import { Metadata } from 'next';

export const metadata:  Metadata ={
  title: 'Services'
}
const page = () => {
  
  return (
    <section>
      <MaxWidthContainer className="paddingY">
        {/* Megatron */}
       <Megatron />
        {/* Mega care */}
        <MegaCare />
       {/* Ogcoin */}
       <Ogcoin />
      </MaxWidthContainer>
    </section>
  );
}

export default page