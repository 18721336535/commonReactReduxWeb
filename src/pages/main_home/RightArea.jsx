import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const RightArea = () => {
    return (
            <Routes>
                <Route path="/ui/home/about-us/*" element={<Layouts/>}/>
                <Route path="/ui/home/about-us/aim/*" element={<Layouts/>}/>
                <Route path="/ui/home/about-us/vision/*"  element={<Layouts/>} />
                <Route path="/ui/home/services" element={<About/>} />
                <Route path="/ui/home/services/services1" element={<Dashboard />} />
                <Route path="/ui/home/services/services2" element={<Dashboard />} />
                <Route path="/ui/home/services/services3" element={<Dashboard />} />
                <Route path="/ui/home/contact" element={<Dashboard />} />
                <Route path="/ui/home/events" element={<Dashboard />} />
                <Route path="/ui/home/events/events1" element={<Dashboard />} />
                <Route path="/ui/home/events/events1" element={<Dashboard />} />
                <Route path="/ui/home/support" element={<Dashboard />} />
                <Route path="/ui/home/*" element={<NoMatch />} />
            </Routes>
    )
}
export default RightArea


function Layouts() {
    return (
        <div>
          <h2>Service</h2>
        </div>
      );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  
  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

