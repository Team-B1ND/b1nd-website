import { LayoutContainer, Layout, Box } from "./style";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const PageTemplate = () => {

  return (
    <LayoutContainer>
      <Header/>
      <Layout>
        <Box>
          <Outlet />
          <Footer/>
        </Box>
      </Layout>
    </LayoutContainer>
  );
};

export default PageTemplate;
