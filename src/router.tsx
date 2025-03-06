import {
  Route,
  Routes as Switch,
  Navigate,
  BrowserRouter,
} from 'react-router-dom'
import PageTemplate from './components/PageTemplate'
import Home from './page/home'
import Service from './page/service/service'
import Blog from './page/blog/blog'

const Routes = () => {
  return (
    <Switch>
      <Route element={<PageTemplate />}>
        <Route path='/adsf' element={<Home />} />
        <Route path='/asfasdf' element={<Service />} />
        <Route path='/' element={<Blog />} />
      </Route>
    </Switch>
  )
}

export default Routes
