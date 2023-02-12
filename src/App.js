import './App.css';
import Header from './header';
import Footer from './footer';
import Dashboard from './dashboard';
import Sessions from './sessions';

function App() {
  return (
    <div style={{padding: '20'}}>
      <Dashboard/>     
      <Sessions/>
      <Footer />
    </div>
  );
}

export default App;
