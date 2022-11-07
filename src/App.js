// import logo from './logo.svg';
import './App.css';
// import TableData from './form';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DisplayFormDataInTable from "./DisplayFormDataInTable";
import Navbar from './Navbar';
// import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
{/* <Navbar /> */}
{/* <MainRoutes /> */}

    <DisplayFormDataInTable />
    </>

  );
}

export default App;
