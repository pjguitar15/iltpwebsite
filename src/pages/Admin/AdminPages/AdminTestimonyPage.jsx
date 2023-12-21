import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import AdminTestimonies from "../TestimoniesPage/AdminTestimonies"

import AdminNav from "../AdminNav"

const AdminTestimonyPage = () => {
  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()
  // remove all the boolean state and change the active base on the url
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/testimonies")
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {/* Dashboard */}
      <div className="row m-0" style={{ height: "100vh" }}>
        {/* Navigation */}
        <AdminNav location={location} />

        <div className="col-12 col-md-7 col-lg-9 p-5">
          {location.pathname.slice(7) === "testimonies" ? (
            <AdminTestimonies />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminTestimonyPage
