import './App.css';
import { Navbar } from './components'
import { Header, Countdown, Aboutus, Address, Footer } from './container'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Countdown />
      <Aboutus />
      <Address />
      <Footer />
    </div>
  );
}

export default App;
