import { LayoutContainer, Layout, Box } from "./style";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const PageTemplate = () => {

  return (
    <LayoutContainer>
      <Header/>
      <Layout>
        <Box>
          <Outlet />
        </Box>
      </Layout>
    </LayoutContainer>
  );
};

export default PageTemplate;
