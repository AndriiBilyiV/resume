import { info } from 'info';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  border: 4px solid ${p => p.theme.colors.lightest};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin: auto;
  margin-bottom: 48px;
`;

export const Photo = () => {
  return (
    <Wrapper>
      <img src={info.face} alt={info.name} height={320} />
    </Wrapper>
  );
};
