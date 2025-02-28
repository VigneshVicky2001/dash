import './App.css';
import { useState,  } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DailyVodIngestionTable from './Components/DailyVodIngestionTable';
import Sidebar from './Components/Sidebar';
import ProjectDetails from './Components/ProjectDetails';

const theme = createTheme();

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: "#f5f5f5" }}>
          {/* <Header toggleSidebar={toggleSidebar} /> */}
          <div style={{ flex: 1, display: 'flex', overflowY: 'auto' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
              <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route index path="/daily-vod-ingestion" element={<DailyVodIngestionTable />}/>
                <Route index path="/project-details/:name" element={<ProjectDetails />}/>
              </Routes>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
