import {
  Route,
  Routes as Switch,
} from 'react-router-dom'
import PageTemplate from './components/PageTemplate'
import Home from './page/home'
import Service from './page/service/service'
import Blog from './page/blog/blog'
import AuthLoadingPage from './page/AuthLoading/AuthLoadingPage'

const Rotuer = () => {
  return (
      <Switch>
        <Route path='/' element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
        <Route path="/callback" element={<AuthLoadingPage />} />
      </Switch>
  )
}

export default Rotuer
