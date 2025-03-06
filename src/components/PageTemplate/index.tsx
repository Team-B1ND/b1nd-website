import { LayoutContainer, Layout, Box } from './style'
import { Outlet, Route, useLocation } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../../page/home'
import Service from '../../page/service/service'
import Blog from '../Blog'
import Routes from '../../router'

const PageTemplate = () => {
  return (
    <LayoutContainer>
      <Header />
      <Layout>
        <Box>
          <Outlet />
          <Footer />
        </Box>
      </Layout>
    </LayoutContainer>
  )
}

export default PageTemplate
