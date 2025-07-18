import BestCompany from "@/components/BestCompany/BestCompany";
import Bike from "@/components/Bike/Bike";
import CardToShow from "@/components/CardToShow/CardToShow";
import Explore from "@/components/ExploreSlider/Explore";
import HappyCustomers from "@/components/HappyCustomers/HappyCustomers";
import Hero from "@/components/hero/Hero";
import MostPopular from "@/components/MostPopular/MostPopular";
import SpecialOffers from "@/components/SpecialOffers/SpecialOffers";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>

      <Hero
        homeHero={true}
      />
      <Explore />
      <BestCompany isPrimary={true} />
      <SpecialOffers />
      <CardToShow />
      <Bike />
      <MostPopular />
      <HappyCustomers />


      <h1>hello world</h1>
    </>
  );
}
