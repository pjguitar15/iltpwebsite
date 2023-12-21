import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AdminNews from "../AdminNews"
import AdminNav from "../AdminNav"

const AdminPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/news")
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <div className="row m-0" style={{ height: "100vh" }}>
        <AdminNav location={location} />

        <div className="col-12 col-md-7 col-lg-9 p-5">
          {location.pathname.slice(7) === "news" ? <AdminNews /> : ""}
        </div>
      </div>
    </div>
  )
}

export default AdminPage
