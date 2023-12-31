import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Navbar from "./MyComponents/Navbar/Navbar.js";
import Home from "./MyComponents/Home/Home.js";
import Alumni from "./MyComponents/Alumni/Alumni";
import Teams from "./MyComponents/Teams/Teams";
import AboutUs from "./MyComponents/AboutUs/AboutUs";
import Events from "./MyComponents/Event/Events.js";
import NEFest from "./MyComponents/Event/NEFest/NEFest.js";
import CareerCounselling from "./MyComponents/Event/CareerCounselling/CareerCounselling.js";
// import Articles from "./MyComponents/Event/articles.js";
import Footer from "./MyComponents/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Alumni" element={<Alumni />} />
          <Route exact path="/Teams" element={<Teams />} />
          <Route exact path="AboutUs" element={<AboutUs />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Events/NorthEastFest" element={<NEFest />} />
          <Route exact path="/Events/CareerCounselling" element={<CareerCounselling />} />
          {/* <Route exact path="/Articles" element={<Articles />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

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

export default App;
