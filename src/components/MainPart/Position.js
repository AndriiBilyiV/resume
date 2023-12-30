import { styled } from 'styled-components';

export const Position = styled.h2`
  margin: 0;
  font-size: 32px;
  color: ${p => p.theme.colors.medium};
  &:before {
    content: '';
    position: absolute;
    top: 16px;
    left: -29px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 4px solid ${p => p.theme.colors.light};
    background-color: ${p => p.theme.colors.lightest};
  }
`;
