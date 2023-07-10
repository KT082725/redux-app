import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { Provider } from './context';
function App() {
  return (
    <>
    <Provider>
     <Navbar/>
     <div className='container'>
    <Shop/></div>
    </Provider>
        </>
  );

}

export default App;
