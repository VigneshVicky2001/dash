import './App.css';
import { useState,  } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DailyVodIngestionTable from './Components/DailyVodIngestionTable';
import Sidebar from './Components/Sidebar';
import ProjectDetails from './Components/ProjectDetails';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TotalVodAssets from './Components/TotalVodAssets';
import "@fontsource/mulish";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
});

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: "#212121" }}>
        <Header toggleSidebar={toggleSidebar} showLogout={!isLoginPage} />
          <div style={{ flex: 1, display: 'flex', overflowY: 'auto' }}>
          {!isLoginPage && <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} isMinimized={sidebarOpen} />}
            <div style={{ flexGrow: 1, marginTop: '60px' }}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route index path="/daily-vod-ingestion" element={<DailyVodIngestionTable />}/>
                <Route path="/project-details/:name" element={<ProjectDetails />}/>
                <Route path="/total-vod-asset" element={<TotalVodAssets />}/>
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </ThemeProvider>
  );
}

export default App;
