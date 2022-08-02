import { Grid } from './styles';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

const Layout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Grid>
  );
};

export default Layout;
