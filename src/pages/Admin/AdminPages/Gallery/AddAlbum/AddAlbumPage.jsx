import React from "react"
import { useLocation } from "react-router-dom"
import AdminNav from "../../../AdminNav"
import useCheckAuthAndNavigate from "../../../../../helpers/hooks/useCheckAuthAndNavigate"
import AddAlbum from "./AddAlbum"

const AddAlbumPage = () => {
  useCheckAuthAndNavigate("/admin/gallery/album/add")
  const location = useLocation()

  return (
    <div>
      <div className="row m-0" style={{ height: "100vh" }}>
        <AdminNav location={location} />

        <div className="col-12 col-md-7 col-lg-9 p-5">
          {location.pathname.slice(7) === "gallery/album/add" ? (
            <AddAlbum />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default AddAlbumPage
