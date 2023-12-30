import { styled } from 'styled-components';

export const MainPartTitle = styled.h3`
  position: relative;
  color: ${p => p.theme.colors.darkest};
  font-size: 32px;
  font-weight: 500;
  margin: 12px 0;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: ${p => p.theme.colors.darkest};
  }
`;
