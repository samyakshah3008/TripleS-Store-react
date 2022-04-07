import { ExclusiveProduct } from "../components/ExclusiveProduct";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { NewArrivals } from "../components/NewArrivals";
import { Partners } from "../components/Partners";
import { Testimonials } from "../components/Testimonials";
import "./LandingPage.css"

export function LandingPage(){
    return(
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
    )
}