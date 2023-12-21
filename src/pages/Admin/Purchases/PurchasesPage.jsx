import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AdminNav from "../AdminNav"
import PurchaseItems from "./PurchaseItems"

const AdminPage = () => {
  // useNavigate
  const navigate = useNavigate()
  // useLocation
  const location = useLocation()
  // remove all the boolean state and change the active base on the url

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/purchases")
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {/* Dashboard */}
      <div className="row m-0">
        {/* Navigation */}
        <AdminNav location={location} />

        <div className="col-12 col-md-7 col-lg-9">
          {location.pathname.slice(7) === "purchases" ? <PurchaseItems /> : ""}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
