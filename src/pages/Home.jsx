import { Header, Main, Product, Footer } from "../components";
import Categories from "../components/Categories";
import Discount from "../components/Discount";
import Facebook from "../components/Facebook";
import Services from "../components/Services";
import Workshop from "../components/Workshop";

function Home() {
  return (
    <>
      <Header />
      <Categories/>
      <Workshop/>
      <Discount/>
      <Services/>
      <Facebook/>
      <Footer />
    </>
  )
}

export default Home