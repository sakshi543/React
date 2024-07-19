import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      <Navbar title="Sakshi" aboutText="About us"/>
      <div className='container'>
        <Textform heading="Enter text to analyze" />
      </div> 
    </>
  );
}

export default App;
