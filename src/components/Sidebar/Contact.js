import { styled } from 'styled-components';

const Wrapper = styled.li`
  padding: 0;
  color: ${p => p.theme.colors.lightest};
  font-size: 20px;
  font-weight: 300;
  margin: 4px 0;
`;

export const Contact = ({ type, name, to }) => {
  return (
    <Wrapper>
      <span style={{ fontWeight: '500' }}>{type}: </span>
      <a style={{ color: 'inherit', textDecoration: 'none' }} href={to}>
        {name}
      </a>
    </Wrapper>
  );
};
