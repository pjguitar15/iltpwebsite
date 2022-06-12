import React, { useState } from 'react'
import NavbarComponent from './pages/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetInTouch from './pages/GetInTouch'
import Footer from './pages/Footer'
import MainHome from './pages/HomeSections/MainHome'
import AboutUs from './pages/AboutUs/AboutUs'
import PhotoGallery from './pages/PhotoGallery/PhotoGallery'
import News from './pages/News/News'
import Fundraising from './pages/Fundraising/Fundraising'
import ContactUs from './pages/ContactUs/ContactUs'
import NewsSlug from './pages/News/NewsSlug'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AdminLogin from './pages/Admin/AdminLogin'

// admin pages
import AdminNewsPage from './pages/Admin/AdminPages/AdminNewsPage'
import AdminTestimonyPage from './pages/Admin/AdminPages/AdminTestimonyPage'
import AdminJumbotronPage from './pages/Admin/AdminPages/AdminJumbotronPage'
import UpdateTestimonies from './pages/Admin/TestimoniesPage/UpdateTestimonies'
import AddTestimony from './pages/Admin/TestimoniesPage/AddTestimony'
import AddTeamMemberForm from './components/AddTeamMemberForm'
import AdminTeamPage from './pages/Admin/AdminPages/AdminTeamPage'
import AdminUpdateTeam from './pages/Admin/AdminUpdateTeam'

import { PaypalTextPage } from './components/paypal-modal/PaypalTextPage'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { VolunteerActivities } from './pages/Admin/AdminPages/AdminPhotoGallery'
import AddImages from './pages/AddImages'
import ItemOpen from './pages/Fundraising/ItemOpen'
import CartPage from './pages/Fundraising/CartPage'

// Context
import CartProvider from './context/CartProvider'
import PurchasesPage from './pages/Admin/Purchases/PurchasesPage'
import TestForm from './pages/Admin/Purchases/TestForm'

const App = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  // console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)

  return (
    <div>
      <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
        <Router>
          <CartProvider>
            <Routes>
              <Route path='/' element={<><NavbarComponent /><MainHome /><GetInTouch />
                <Footer /></>} />
              <Route path='/about' element={<><NavbarComponent /><AboutUs /><GetInTouch />
                <Footer /></>} />
              <Route path='/photo-gallery' element={<><NavbarComponent /><PhotoGallery /></>} />
              <Route path='/news' element={<><NavbarComponent /><News /><GetInTouch />

                <Footer /></>} />
              <Route path='/news/:id' element={<><NavbarComponent /><NewsSlug /><GetInTouch />
                <Footer /></>} />
              <Route path='/fundraising' element={<><NavbarComponent /><Fundraising /><GetInTouch />
                <Footer /></>} />
              <Route path='/fundraising/item/:id' element={<><ItemOpen /></>} />
              <Route path='/fundraising/cart' element={<><NavbarComponent /><CartPage /><Footer /></>} />

              <Route path='/contact' element={<><NavbarComponent /><ContactUs /><GetInTouch />
                <Footer /></>} />
              <Route path='/admin' element={<AdminLogin setUser={setUser} user={user} password={password} setPassword={setPassword} />} />

              {/* <Route path='/adminpage' element={<AdminPage />} /> */}
              <Route path='*' element={<ErrorPage />} />

              {/* Protected Route */}
              {/* <Route element={<ProtectedRoute />}> */}
              <Route path='/admin/news' element={<AdminNewsPage />} />
              <Route path='/admin/testimonies' element={<AdminTestimonyPage />} />
              <Route path='/admin/jumbotron' element={<AdminJumbotronPage />} />
              <Route path='/admin/team' element={<AdminTeamPage />} />
              <Route path='/admin/gallery' element={<VolunteerActivities />} />
              <Route path='/admin/gallery/add' element={<AddImages />} />
              <Route path='/admin/purchases' element={<PurchasesPage />} />

              {/* Add Testimony Route */}
              <Route path='/admin/add-testimony' element={<AddTestimony />} />
              <Route path='/admin/testimonies/:id' element={<UpdateTestimonies />} />

              {/* Add Team Member Route */}
              <Route path='/admin/team/add' element={<AddTeamMemberForm />} />
              <Route path='/admin/team/update/:id' element={<AdminUpdateTeam />} />
              {/* </Route> */}

              <Route path='/paypal-payment' element={<PaypalTextPage />} />
              <Route path='/test' element={<TestForm />} />
            </Routes>
          </CartProvider>
        </Router>
      </PayPalScriptProvider>
    </div>
  )
}

export default App