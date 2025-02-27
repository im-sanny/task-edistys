import Banner from '@/components/home/Banner';
import Customer from '@/components/home/Customer';
import Company from '@/components/home/Company';
import Count from '@/components/home/Count';
import CTASection from '@/components/home/CTASection';
import Philosophy from '@/components/home/Philosophy';
import Slider from '@/components/home/Slider';

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Customer />
      <Philosophy />
      <Slider />
      <Count />
      <Company />
      <CTASection />
    </div>
  );
};

export default Homepage;
