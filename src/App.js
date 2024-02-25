import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./MyComponents/Navbar/Navbar.js";
import Home from "./MyComponents/Home/Home.js";
import Alumni from "./MyComponents/Alumni/Alumni";
import Teams from "./MyComponents/Teams/Teams";
import './App.css';
import AboutUs from "./MyComponents/AboutUs/AboutUs";
import Events from "./MyComponents/Event/Events.js";
import Event1 from "./MyComponents/Event/Event1/Event1.js";
import WspGallery from "./MyComponents/WspGallery/WspGallery.js";
import NEFest from "./MyComponents/Event/NEFest/NEFest.js";
import Freshers from "./MyComponents/Event/Freshers/Freshers.js";
import Farewell from "./MyComponents/Event/Farewell/Farewell.js";
import FoodStall from "./MyComponents/Event/FoodStall/FoodStall.js";
import FoundationDay from "./MyComponents/Event/FoundationDay/FoundationDay.js";
import CareerCounselling from "./MyComponents/Event/CareerCounselling/CareerCounselling.js";
import CareerCounsellingWorkshop from "./MyComponents/Event/CareerCounsellingWorkshop/CareerCounsellingWorkshop.js";

import Footer from "./MyComponents/Footer/Footer.js";

function App() {
  const galleryImages=[
    {
      img:'./images/events1.jpg'
    },
    {
      img:'./images/events2.jpg'
    },
    {
      img:'./images/events3.jpg'
    },
    {
      img:'./images/events4.jpg'
    },
    {
      img:'./images/events5.jpg'
    },
    {
      img:'./images/events6.jpg'
    }
  ]
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/alumni" element={<Alumni />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/events/1" element={<Event1 />} />
          <Route exact path="/WspGallery" element={<WspGallery galleryImages={galleryImages}/>}/>
          <Route exact path="/events/north-east-festival" element={<NEFest />} />
          <Route exact path="/events/career-counselling" element={<CareerCounselling />} />
          <Route exact path="/events/career-counselling-workshop" element={<CareerCounsellingWorkshop />} />
          <Route exact path="/events/freshers" element={<Freshers/>} />
          <Route exact path="/events/farewell" element={<Farewell/>} />
          <Route exact path="/events/food-stall" element={<FoodStall/>} />
          <Route exact path="/events/foundation-day" element={<FoundationDay/>} />
          {/* TODO: change this to visit a 404 page (may cause confusion otherwise) */}
          <Route path="*" element={<Home />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

// function App() {
//   return (
//     <div>
//     <Events />
//    <Router>
//     <Routes>
//       <Route path="/events"element={Events}/>
//       <Route path="/articles"element={articles}/>
//     </Routes>
//    </Router>
//    </div>
// =======
//   // Link
// } from 'react-router-dom';
// import Alumni from './MyComponents/Alumni/Alumni';
// import Teams from './MyComponents/Teams/Teams';
// import AboutUs from './MyComponents/AboutUs/AboutUs';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path= "/Alumni" element={<Alumni/>}>
//           </Route>
// // <<<<<<< Penuel/AboutUs
// // =======
// //           <Route exact path="/Teams" element={<Teams/>}>
// //           </Route>
// // >>>>>>> main
//           <Route exact path="AboutUs" element={<AboutUs/>}>
//           </Route>
//         </Routes>
//       </div>
//     </Router>
// >>>>>>> main
//   );
// }