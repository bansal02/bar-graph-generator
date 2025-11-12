import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

function InputPage() {
  const [barCount, setBarCount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const count = parseInt(barCount);
    if (count > 0 && count <= 20) {
      navigate(`/graph/${count}`);
    } else {
      alert('Please enter a number between 1 and 20');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3 },
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            borderRadius: { xs: 3, md: 4 },
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%',
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: { xs: 'none', sm: 'translateY(-4px)' },
              boxShadow: { xs: '0 8px 24px rgba(102, 126, 234, 0.15)', sm: '0 12px 40px rgba(102, 126, 234, 0.2)' },
            },
          }}
        >
          <BarChartIcon
            sx={{
              fontSize: { xs: 48, sm: 56, md: 64 },
              color: 'primary.main',
              mb: { xs: 1.5, sm: 2 },
            }}
          />
          
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 0.5, sm: 1 },
            }}
          >
            Bar Graph Generator
          </Typography>
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ 
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 1, sm: 0 },
            }}
          >
            Enter the number of bars you want to generate
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="number"
              label="Number of Bars"
              variant="outlined"
              value={barCount}
              onChange={(e) => setBarCount(e.target.value)}
              inputProps={{ min: 1, max: 20 }}
              sx={{
                mb: { xs: 2, sm: 3 },
                '& .MuiOutlinedInput-root': {
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: 2,
                  },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                },
              }}
              required
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<BarChartIcon />}
              sx={{
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                  boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              View Graph
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default InputPage;

