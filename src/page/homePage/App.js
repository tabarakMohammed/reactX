import logo from '../../logo.svg';
import '../../App.css';



function Header(){
  return (
    <header >
    <img src={logo} className="img"  alt="logo" />
   </header>
  )
}

function Pecture(){
 return(
    <div>
      <img src="/img/" alt="img" />
    </div>
 )

}

function Text(){
  return(
     <div>
       <p>gggggggggggggggggggggggggggggg</p>
     </div>
  )
 
 }

function App() {
  return (
    <div className="App">
       <Header/>
       <Pecture/>
       <Text/>
    </div>
  );
}

export default App;
