import React from "react"
import { useLocation } from "react-router-dom"
import AdminNav from "../../AdminNav"
import AwardsContent from "./AwardsContent"
import useCheckAuthAndNavigate from "../../../../helpers/hooks/useCheckAuthAndNavigate"
import "./Awards.css"

const Awards = () => {
  useCheckAuthAndNavigate("/admin/awards")
  const location = useLocation()

  return (
    <div>
      <div className="row m-0" style={{ height: "100vh" }}>
        <div className="col-12 col-md-5 col-lg-3 bg-dark pt-4 text-center px-0">
          <AdminNav location={location} />
        </div>
        <div className="col-12 col-md-7 col-lg-9 p-5">
          {location.pathname.slice(7) === "awards" ? <AwardsContent /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Awards
