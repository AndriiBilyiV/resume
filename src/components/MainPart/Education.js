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
const Degree = styled.p`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  color: ${p => p.theme.colors.dark};
`;
const University = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${p => p.theme.colors.medium};
`;
export const Education = ({ details }) => {
  const { start, end, degree, university } = details;
  return (
    <Wrapper>
      <Period>
        {start}-{end}
      </Period>
      <Degree>{degree}</Degree>
      <University>{university}</University>
    </Wrapper>
  );
};
