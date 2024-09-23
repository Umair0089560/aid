
import Banner from "./components/Banner/Banner";
import MainHader from "./components/Headers/MainHader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home() {
  return (
    <div>
      <main>
       <MainHader />
       <Banner/>
             </main>
      
    </div>
  );
}
