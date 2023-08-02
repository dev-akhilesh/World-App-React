import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'
import CountryDetail from './components/CountryDetail'
import App from './App'


const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path=":country" element={<CountryDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter />
)


// Different Syntax

// import ReactDOM from 'react-dom/client'
// import App from './App'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import Error from './components/Error'
// import CountryDetail from './components/CountryDetail'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/:country',
//         element: <CountryDetail />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )




