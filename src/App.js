
import { Routes, Route, Outlet, Link,NavLink,Navigate,useRoutes } from "react-router-dom";

import Header from './pages/header/Header';
import Home from "./pages/main_home/Home";
import './App.css';
import routs from './routes'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const routers = useRoutes(routs)
  return (
    
    <div className={
      "ag-theme-quartz-dark"
  }>
    <Provider store={store}>
      <Header/>
      {routers}
    </Provider>
    {/* <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >

      <Tab eventKey="home" title="Home">
        
      <div className="container">
        <div className="column"><Layout/></div>
        <div className="column">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs> */}
    
    </div>
   
  );
}

export default App;

// <div>
//   <div className="row">
//     <div className="col-xs-offset-2 col-xs-8">
//       <div className="page-header"><h2> React router demo</h2></div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-xs-offset-2 col-xs-2">
//       <div className="list-group">
//         <a className="list-group-item" > About</a>
//         <a className="list-group-item" > Home</a>
//       </div>
//     </div>
//     <div className="col-xs-6">
//       <div className="panel">
//         <div className="panel-body"></div>
//       </div>
//     </div>
//   </div>
// </div>

