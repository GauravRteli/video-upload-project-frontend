import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./Components/Upload";
import Navbar from "./Components/Navbar";
import Videos from "./Components/Videos";
import ShowVideo from "./Components/ShowVideo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/showvideo/:videoId" element={<ShowVideo />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
