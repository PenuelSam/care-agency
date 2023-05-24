import Cards from "../components/Cards"
import Header from "../components/Header"
import Testimonies from "../components/Testimonies"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="max-container bgc my-[100px] py-[20px] lg:hidden sm:flex rounded-md flex justify-center items-center">
         <p className="text-white font-bold text-[25px]  sm:text-[20px] sm:px-[10px]">Contact Us on 020 860 1907 <br className="sm:flex hidden" /> Email: info@homecareagency.co.uk</p>
      </div>
      <Cards />
      <Testimonies />
    </div>
  )
}

export default Home