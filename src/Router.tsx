import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Home2 } from './pages/Home2'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
    </Routes>
  )
}
