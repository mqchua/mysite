import Item from '@mui/material/Grid';
import PropTypes from 'prop-types';

function Internship(props) {
  return (
    <Item className='item'>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p style={{ fontSize: '11px', opacity: '0.6' }}>{props.period}</p>
    </Item>
  );
}

Internship.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
};

export default Internship;
