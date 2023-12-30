import { styled } from 'styled-components';
const Wrapper = styled.div`
  margin-bottom: 32px;
`;
const Period = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: ${p => p.theme.colors.medium};
`;
const Company = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.colors.medium};
`;
const Position = styled.p`
  position: relative;
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  color: ${p => p.theme.colors.dark};
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
const About = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: ${p => p.theme.colors.dark};
`;

export const Job = ({ details }) => {
  const { start, end, company, position, about, city } = details;
  return (
    <Wrapper>
      <Period>
        {start}-{end}
      </Period>
      <Company>
        {company} | {city}
      </Company>
      <Position>{position}</Position>
      <About>{about}</About>
    </Wrapper>
  );
};
