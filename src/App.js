import React, { useState } from 'react'
import NavbarComponent from './pages/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetInTouch from './pages/GetInTouch'
import Footer from './pages/Footer'
import MainHome from './pages/HomeSections/MainHome'
import AboutUs from './pages/AboutUs/AboutUs'
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
import { VolunteerActivities } from './pages/Admin/AdminPages/VolunteerActivities'
import AddVolunteerImages from './pages/AddVolunteerImages'

const App = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <PayPalScriptProvider options={{ 'client-id': 'AfmEZY5_AGZIvJuTr-zTzF_YI3C8BEY-1B6KdowcPKAA-Ufx_O5nYftqkMcf65zfUlcrEi1IKK8sUdZW' }}>
        <Router>
          <Routes>
            <Route path='/' element={<><NavbarComponent /><MainHome /><GetInTouch />
              <Footer /></>} />
            <Route path='/about' element={<><NavbarComponent /><AboutUs /><GetInTouch />
              <Footer /></>} />
            <Route path='/news' element={<><NavbarComponent /><News /><GetInTouch />
              <Footer /></>} />
            <Route path='/news/:id' element={<><NavbarComponent /><NewsSlug /><GetInTouch />
              <Footer /></>} />
            <Route path='/fundraising' element={<><NavbarComponent /><Fundraising /><GetInTouch />
              <Footer /></>} />
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
            <Route path='/admin/volunteers' element={<VolunteerActivities />} />
            <Route path='/admin/volunteers/add' element={<AddVolunteerImages />} />

            {/* Add Testimony Route */}
            <Route path='/admin/add-testimony' element={<AddTestimony />} />
            <Route path='/admin/testimonies/:id' element={<UpdateTestimonies />} />

            {/* Add Team Member Route */}
            <Route path='/admin/team/add' element={<AddTeamMemberForm />} />
            <Route path='/admin/team/update/:id' element={<AdminUpdateTeam />} />
            {/* </Route> */}

            <Route path='/paypal-payment' element={<PaypalTextPage />} />
          </Routes>
        </Router>
      </PayPalScriptProvider>
    </div>
  )
}

export default App