import Divider from '@mui/material/Divider';

export default function StyledDivider() {
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <Divider
        sx={{
          borderBottomWidth: '3px',
          background: '#000',
          opacity: '0.7',
          width: '160px',
        }}
        orientation='horizontal'
      />
    </div>
  );
}
