import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const MyComponent = styled(CircularProgress)({
  color: '#9fa8da',
  width: '50px',
  height: '50px'
});

export function LoadingData() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <MyComponent />
    </Box>

  )
}
