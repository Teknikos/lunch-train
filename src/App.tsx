import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import AboutView from './views/AboutView'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView'
import ParticipantsView from './views/ParticipantsView'
import MenuView from './views/MenuView'
import ItineraryView from './views/ItineraryView'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}
      errorElement={<ErrorView />}
    >
      <Route errorElement={<ErrorView />}>
        <Route index element={<HomeView />} />
        <Route path='about' element={<AboutView />} />
        <Route path='participants' element={<ParticipantsView />} />
        <Route path='menu' element={<MenuView />} />
        <Route path='itinerary' element={<ItineraryView />} />
      </Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
