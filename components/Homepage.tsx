import Company from '@/components/Company';
import Count from '@/components/Count';
import CTASection from '@/components/CTASection';
import Slider from '@/components/Slider';

const Homepage = () => {
  return (
    <div>
      <Slider />
      <Count />
      <Company />
      <CTASection />
    </div>
  );
};

export default Homepage;
