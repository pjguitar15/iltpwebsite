import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AdminNav from "../AdminNav"
import AdminOurTeam from "../AdminOurTeam"

const AdminTeamPage = ({ setIsLoggedIn }) => {
  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")
    if (authToken) {
      navigate("/admin/team")
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
          {location.pathname.slice(7) === "team" ? <AdminOurTeam /> : ""}
        </div>
      </div>
    </div>
  )
}

export default AdminTeamPage
