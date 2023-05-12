import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

   <div className='mx-2 md:mx-4 lg:mx-8'>
     <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
   </div>

)
