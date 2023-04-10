{
  /* import Button from '@mui/material/Button'; */
}
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #71797e;
  background-color: #faf7f0;
  border: none;
  padding: 20px;
  &:hover {
    color: #000;
    transition: 0.2s;
    cursor: pointer;
  }
`;

export default StyledButton;
