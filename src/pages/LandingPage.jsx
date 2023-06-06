import { ExclusiveProduct } from "../components/ExclusiveProduct";
import { FeaturedProduct } from "../components/FeaturedProduct";
// import { Footer } from "../components/Footer";
import { Header, Footer, NavBar } from "../components";
// import { NavBar } from "../components";
import { NewArrivals } from "../components/NewArrivals";
import { Partners } from "../components/Partners";
import { Testimonials } from "../components/Testimonials";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Partners></Partners>
      <FeaturedProduct></FeaturedProduct>
      <NewArrivals></NewArrivals>
      <ExclusiveProduct></ExclusiveProduct>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}
