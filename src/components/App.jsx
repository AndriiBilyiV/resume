import { Container } from './Container/Container';
import { MainPart } from './MainPart/MainPart';
import { Sidebar } from './Sidebar/Sidebar';

export const App = () => {
  return (
    <Container>
      <Sidebar />
      <MainPart />
    </Container>
  );
};
