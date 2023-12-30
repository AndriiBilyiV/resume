import { Name } from 'components/MainPart/Name';
import { info } from 'info';
import { styled } from 'styled-components';
import { DownloadPDF } from './DownloadPDF';
import { Education } from './Education';
import { Job } from './Job';
import { MainPartTitle } from './MaitPartTitle';
import { Position } from './Position';
import { Summary } from './Summary';

const StyledMainPart = styled.div`
  padding: 60px 36px;
  position: relative;
  width: 1000px;
`;
const Wrapper = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 16px;
    left: -24px;
    width: 4px;
    height: calc(100% - (16px));
    background-color: ${p => p.theme.colors.light};
  }
`;
export const MainPart = () => {
  return (
    <StyledMainPart>
      <DownloadPDF />
      <Name>{info.name}</Name>
      <Wrapper>
        <Position>{info.position}</Position>
        <Summary>{info.summary}</Summary>
        <MainPartTitle>Experience</MainPartTitle>
        {info.jobs.map(job => (
          <Job details={job} />
        ))}
        <MainPartTitle>Education</MainPartTitle>
              {info.education.map(edu => <Education details={edu} />)}
      </Wrapper>
    </StyledMainPart>
  );
};
