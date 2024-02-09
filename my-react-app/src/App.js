
import Header from "./components/Navbar"
import Main from "./components/Main"
import './App.css'
function App() {
  return (

    <body>
      <div className = 'upper-layout'>
        <div>
          <Header />
          <div className="main-bg">
            <Main />
          </div>
        </div>
        
      </div>
      

    </body>
  );
}

export default App;
