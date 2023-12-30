import { styled } from 'styled-components';
import { Photo } from './Photo';

const StyledSidebar = styled.aside``;

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Photo />
    </StyledSidebar>
  );
};
