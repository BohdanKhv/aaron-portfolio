import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cat from './pages/Cat';
import { Nav, Header, Footer, Publication, Teaching, Honors } from './components';

function App() {
  return (
      <Router>
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/honors" element={<Honors />} />
          <Route path="/cat" element={<Cat />} />
        </Routes>
      <Footer />
      </Router>
  );
}

export default App;
