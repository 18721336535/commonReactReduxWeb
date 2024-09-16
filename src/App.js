
import { useRoutes } from "react-router-dom";

import Header from './pages/header/Header';
import './App.css';
import routs from './routes'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Provider } from "react-redux";
import store1 from "./reduxes/store";

function App() {
  const routers = useRoutes(routs)
  return (
    
  //   <div className={
  //     "ag-theme-quartz-dark"
  // }>
    <Provider store={store1}>
      <Header/>
      {routers}
    </Provider>
    // </div>
   
  );
}

export default App;

