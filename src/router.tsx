import {
  HashRouter,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import PageTemplate from './components/Common/PageTemplate'
import Home from './page/home'
import ServicePage from './page/service/service'
import BlogPage from './page/blog/blog'
import AuthLoadingPage from './page/AuthLoading/AuthLoadingPage'
import WritePage from './page/Write/write'
import Admin from './page/Admin/page'
import BlogDetailPage from './page/BlogDetail/page'
import { DodamNotFoundPage } from '@b1nd/dds-web'
const Rotuer = () => {
  return (
    <>
      
        <Switch>
        <Route path='/' element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<BlogDetailPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path='/admin' element={<Admin />}/>
        </Route>
        <Route path="/callback" element={<AuthLoadingPage />} />

        <Route path="/*" element={<DodamNotFoundPage />} />
        </Switch>
      
      </>
  )
}

export default Rotuer
