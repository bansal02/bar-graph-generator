import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import InputPage from './pages/InputPage';
import GraphPage from './pages/GraphPage';
import './App.css';

// Create a custom theme with consistent colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#a8b5ff',
      dark: '#4a5bb8',
    },
    secondary: {
      main: '#764ba2',
      light: '#a478d1',
      dark: '#4e3172',
    },
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#718096',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/graph/:count" element={<GraphPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
