import Link from '@mui/material/Link';
import PropTypes from 'prop-types';

export default function StyledIcon(props) {
  return (
    <Link target='_blank' href={props.link}>
      {props.icon}
    </Link>
  );
}

StyledIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
