import React, { useState } from "react"
import { Button } from "react-bootstrap"
import AllAwards from "./AllAwards"
import { IoMdAddCircleOutline } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AwardsContent = () => {
  const navigate = useNavigate()
  return (
    <main>
      <ToastContainer />
      <h3>Awards</h3>
      <p className="col-7 text-secondary">You can add and delete awards here</p>
      <hr />
      <Button
        size="sm"
        className="mb-3 d-flex align-items-center gap-1"
        onClick={() => navigate("/admin/awards/add")}
      >
        <IoMdAddCircleOutline style={{ fontSize: "16px" }} /> Add an award
      </Button>
      <AllAwards />
    </main>
  )
}

export default AwardsContent
