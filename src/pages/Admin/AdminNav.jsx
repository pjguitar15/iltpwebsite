import React, { useState } from "react"
import iltplogo from "../../assets/iltp-logo.png"
import { useNavigate } from "react-router-dom"
import { FaAward, FaChevronRight } from "react-icons/fa6"
import { GrGallery } from "react-icons/gr"
import { MdOutlineAddCircle } from "react-icons/md"

const AdminNav = ({ location }) => {
  const [galleryCollapsed, setGalleryCollapse] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    alert("Thank you admin!")
    // destroy token
    sessionStorage.removeItem("Auth Token")
    navigate("/admin")
  }
  return (
    <div className="col-12 col-md-5 col-lg-3 bg-dark pt-4 px-0">
      <div className="col-2 mx-auto">
        <img src={iltplogo} className="w-100" alt="iltp logo" />
      </div>
      <div className="text-center">
        <h5 className="mt-2 text-white rubik-400">ILTP Admin</h5>
        <p className="text-muted">Navigation</p>
      </div>

      <div
        onClick={() => navigate("/admin/purchases")}
        className={`${
          location.pathname.slice(7) === "purchases"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={`${
              location.pathname.slice(7) === "purchases" ? "black" : "white"
            } `}
            className="bi bi-cash-coin me-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
            />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
          </svg>
          Purchases
        </h6>
      </div>

      <div
        onClick={() => navigate("/admin/news")}
        className={`${
          location.pathname.slice(7) === "news"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <i className="bi bi-newspaper me-2"></i>News Page
        </h6>
      </div>

      {/* Gallery */}
      <div
        onClick={() => setGalleryCollapse(!galleryCollapsed)}
        className={`${
          location.pathname.slice(7) === "gallery" ||
          location.pathname.slice(7) === "gallery/add" ||
          location.pathname.slice(7) === "gallery/album/add"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 text-light py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`} style={{ userSelect: "none" }}>
          Gallery
          <FaChevronRight
            className="ms-2"
            style={{
              fontSize: "11px",
              transform: galleryCollapsed ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />{" "}
        </h6>
      </div>
      <div style={{ display: galleryCollapsed ? "block" : "none" }}>
        <div
          onClick={() => navigate("/admin/gallery")}
          className={`m-0 text-light py-3 admin-link ps-5`}
          style={{
            background: "#353535",
          }}
        >
          <h6 className={`m-0 rubik-400 d-flex gap-2 ps-5`}>
            <GrGallery /> View Gallery
          </h6>
        </div>
        <div
          onClick={() => navigate("/admin/gallery/add")}
          className={`m-0 text-light py-3 admin-link ps-5`}
          style={{
            background: "#353535",
          }}
        >
          <h6 className={`m-0 rubik-400 d-flex gap-2 ps-5`}>
            <MdOutlineAddCircle /> Add images
          </h6>
        </div>
        <div
          onClick={() => navigate("/admin/gallery/album/add")}
          className={`m-0 text-light py-3 admin-link ps-5`}
          style={{
            background: "#353535",
          }}
        >
          <h6 className={`m-0 rubik-400 d-flex gap-2 ps-5`}>
            <MdOutlineAddCircle /> Add albums
          </h6>
        </div>
      </div>

      <div
        onClick={() => navigate("/admin/awards")}
        className={`${
          location.pathname.slice(7) === "awards" ||
          location.pathname.slice(7) === "awards/add"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <FaAward className="me-2" />
          Awards
        </h6>
      </div>

      <div
        onClick={() => navigate("/admin/testimonies")}
        className={`${
          location.pathname.slice(7) === "testimonies"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <i className="bi bi-person-lines-fill me-2"></i> Testimonies
        </h6>
      </div>
      <div
        onClick={() => navigate("/admin/jumbotron")}
        className={`${
          location.pathname.slice(7) === "jumbotron"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 text-light py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <i className="bi bi-blockquote-right me-2"></i>Jumbotron
        </h6>
      </div>

      <div
        onClick={() => navigate("/admin/team")}
        className={`${
          location.pathname.slice(7) === "team"
            ? "bg-light text-dark"
            : "text-light"
        } m-0 text-light py-3 admin-link ps-5`}
      >
        <h6 className={`m-0 rubik-400`}>
          <i className="bi bi-speedometer me-2"></i>Our Team
        </h6>
      </div>

      <div
        onClick={handleLogout}
        className={`m-0 text-light py-3 admin-link ps-5`}
      >
        <h6 className={`text-white m-0`}>
          <i className="bi bi-box-arrow-left me-2"></i>Logout
        </h6>
      </div>
    </div>
  )
}

export default AdminNav
