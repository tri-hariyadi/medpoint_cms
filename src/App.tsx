import { BrowserRouter, Route, Routes } from 'react-router';

import Home from 'pages/Home.tsx';
import Login from 'pages/Login.tsx';
import NotFound from 'pages/NotFound.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
