import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';

function GraphPage() {
  const { count } = useParams();
  const navigate = useNavigate();
  const barCount = parseInt(count);
  
  const [bars, setBars] = useState([]);
  const [selectedBar, setSelectedBar] = useState(null);

  useEffect(() => {
    // Generate random heights for bars
    const newBars = Array.from({ length: barCount }, (_, index) => ({
      id: index,
      height: Math.floor(Math.random() * 200) + 50, // Random height between 50 and 250
    }));
    setBars(newBars);
  }, [barCount]);

  const handleBarClick = (index) => {
    setSelectedBar(index);
  };

  const handleRegenerate = () => {
    const newBars = Array.from({ length: barCount }, (_, index) => ({
      id: index,
      height: Math.floor(Math.random() * 200) + 50,
    }));
    setBars(newBars);
    setSelectedBar(null);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 2, sm: 3 },
      }}>
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 3, md: 4 },
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: { xs: 2, sm: 0 },
            mb: { xs: 3, sm: 4 },
          }}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bar Graph Visualization
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 1.5, sm: 2 },
              flexDirection: 'row',
              flexShrink: 0,
            }}>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon sx={{ display: { xs: 'none', sm: 'block' } }} />}
                onClick={handleRegenerate}
                sx={{
                  flex: { xs: 1, sm: '0 0 auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.25 },
                  fontWeight: 600,
                  borderWidth: 2,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  whiteSpace: 'nowrap',
                  minWidth: { xs: 'auto', sm: '130px' },
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(102, 126, 234, 0.08)',
                    transform: { xs: 'none', sm: 'translateY(-2px)' },
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Regenerate
              </Button>
              
              <Button
                variant="contained"
                startIcon={<HomeIcon sx={{ display: { xs: 'none', sm: 'block' } }} />}
                onClick={() => navigate('/')}
                sx={{
                  flex: { xs: 1, sm: '0 0 auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.25 },
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  whiteSpace: 'nowrap',
                  minWidth: { xs: 'auto', sm: '100px' },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    transform: { xs: 'none', sm: 'translateY(-2px)' },
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Home
              </Button>
            </Box>
          </Box>

          {selectedBar !== null && (
            <Chip
              label={`Bar ${selectedBar + 1} selected - Height: ${bars[selectedBar]?.height}px`}
              color="primary"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                py: { xs: 2, sm: 2.5 },
                px: 1,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            />
          )}

          {/* Bar Chart Display */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: 3, sm: 4 },
              p: { xs: 2, sm: 3 },
              minHeight: { xs: 300, sm: 350, md: 400 },
              borderRadius: 2,
              background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)',
              border: '2px solid #e0e0e0',
              overflow: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: { xs: '0.5%', sm: '1%' },
                width: { xs: '95%', sm: '85%', md: '70%' },
                minWidth: 'fit-content',
              }}
            >
              {bars.map((bar, index) => (
                <Box
                  key={bar.id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: `${(100 / barCount) - 1}%`,
                    minWidth: { xs: '20px', sm: '30px' },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { 
                        xs: `${bar.height * 0.7}px`, 
                        sm: `${bar.height * 0.85}px`, 
                        md: `${bar.height}px` 
                      },
                      minHeight: '40px',
                      background:
                        selectedBar === index
                          ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: { xs: '4px 4px 0 0', sm: '8px 8px 0 0' },
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow:
                        selectedBar === index
                          ? '0 8px 20px rgba(245, 87, 108, 0.4)'
                          : '0 4px 10px rgba(102, 126, 234, 0.3)',
                      '&:hover': {
                        transform: { xs: 'translateY(-4px)', sm: 'translateY(-8px) scale(1.02)' },
                        boxShadow: '0 12px 30px rgba(102, 126, 234, 0.5)',
                      },
                    }}
                    onClick={() => handleBarClick(index)}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      mt: { xs: 0.5, sm: 1 },
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.875rem', md: '1rem' },
                      color: selectedBar === index ? '#f5576c' : '#667eea',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Button Controls */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: '1rem', sm: '1.25rem' },
              color: 'text.secondary',
            }}
          >
            Select a Bar
          </Typography>
          
          <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
            {bars.map((bar, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={bar.id}>
                <Button
                  fullWidth
                  variant={selectedBar === index ? 'contained' : 'outlined'}
                  onClick={() => handleBarClick(index)}
                  sx={{
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
                    fontWeight: 600,
                    borderWidth: 2,
                    background:
                      selectedBar === index
                        ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                        : 'transparent',
                    borderColor:
                      selectedBar === index ? 'transparent' : 'primary.main',
                    '&:hover': {
                      borderWidth: 2,
                      transform: { xs: 'none', sm: 'translateY(-2px)' },
                      boxShadow:
                        selectedBar === index
                          ? '0 6px 20px rgba(245, 87, 108, 0.4)'
                          : '0 4px 12px rgba(102, 126, 234, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Bar {index + 1}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default GraphPage;

