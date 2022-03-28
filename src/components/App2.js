import Logo from "./components/Logo";
import AuthButton from "./components/AuthButton";
import Flight from "./components/Flight";
import "./App.css"

function App() {


//   const links =[
//     {
//         buttonName: 'Reviews',
//     },
//     {
//         buttonName: 'Tips',
//     },
//     {
//         buttonName: 'Alerts',
//     },
//     {
//         buttonName: 'Blogs',
//     }
// ]
  return (
    <div className = "app-container">
      <div className ="header-container">
        <div className="header">
          <Logo/>
          <div style={{display: 'flex', alignItems: 'center',marginTop:'0.1%',justifyContent: 'space-between',
          color: 'white', width: '15%', marginLeft: '26%', fontSize: '0.7em'}}>
            {links.map((link)=> <div>{link.buttonName}</div>)}
          </div>
          <div className="auth-button"><AuthButton/></div>
      </div>
      <div class="main-text-holder">
          <h1>Discover A Beautiful Place <br/> With Us</h1>
          <p>Would you explore nature paradise in the world,
          let's find the <br/>best destination in the world with us
          </p>
      </div>
      </div>

      <div className="Flight"><Flight/></div>
      
    </div>
  );
}

export default App;
