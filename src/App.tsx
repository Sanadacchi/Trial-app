
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import EnterButton from './components/EnterButton';
import Home from './components/Home';

const Landing = () => (
  <>
    <VideoBackground />
    <EnterButton/>
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;