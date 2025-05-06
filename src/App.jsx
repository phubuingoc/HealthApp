import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TopPage from './pages/TopPage';
import MyRecord from './pages/MyRecord';
import ColumnPage from './pages/ColumnPage';
import './assets/styles/styles.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/my-record" element={<MyRecord />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
