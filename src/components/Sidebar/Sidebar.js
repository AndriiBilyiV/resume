import { info } from 'info';
import { styled } from 'styled-components';
import { Contact } from './Contact';
import { Photo } from './Photo';
import { Point } from './Point';
import { SidebarTitle } from './SidebarTitle';

const StyledSidebar = styled.aside`
  background-color: ${p => p.theme.colors.dark};
  width: 400px;
  padding: 36px;
  padding-top: 48px;
`;

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Photo />
      <SidebarTitle>Contacts</SidebarTitle>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {info.contacts.map(contact => (
          <Contact type={contact.type} name={contact.name} to={contact.to} />
        ))}
      </ul>
      <SidebarTitle>Soft Skills</SidebarTitle>
      <ul>
        {info.soft.map(skill => (
          <Point>{skill}</Point>
        ))}
      </ul>
      <SidebarTitle>Hard Skills</SidebarTitle>
      <ul>
        {info.hadr.map(skill => (
          <Point>{skill}</Point>
        ))}
      </ul>
      <SidebarTitle>Language</SidebarTitle>
      <ul>
        {info.language.map(skill => (
          <Point>{skill}</Point>
        ))}
      </ul>
    </StyledSidebar>
  );
};
