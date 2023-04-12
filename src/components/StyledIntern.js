import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

function Intern(props) {
  return (
    <Grid item className='item' xs={12} pt={4}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p style={{ fontSize: '11px', opacity: '0.6' }}>{props.period}</p>
    </Grid>
  );
}

Intern.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  period: PropTypes.string,
};

export default Intern;
