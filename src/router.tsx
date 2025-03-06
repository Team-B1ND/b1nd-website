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

const Rotuer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Rotuer
