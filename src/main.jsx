import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import Blogpost from './pages/Blogpost.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'


import Hero2 from './pages/Hero2.jsx'

import Product from './pages/Product.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import Newest from './pages/Newest.jsx'
import Trust from './components/Trust.jsx'










createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ShopContextProvider>
  <Navbar/>
 
 <StrictMode>
   <Routes>
     <Route path='/' element={<App/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>



     <Route path='/blog/:slug' element={<Blogpost/>}></Route>

     <Route path='/eshop' element={<Hero2/>}></Route>

     <Route path='/product/:productId' element={<Product/>}></Route>
     <Route path='/trust' element={<Trust/>}></Route>

     
    
   </Routes>


</StrictMode>



<Footer/>

  </ShopContextProvider>
     
 
</BrowserRouter>
)
