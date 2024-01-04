import React from "react"
import { IoMdCheckmark } from "react-icons/io"

const RoundedCheckTag = ({ title }) => {
  return (
    <div
      className="px-4 py-2"
      style={{
        background: "lightgreen",
        display: "inline-block",
        borderRadius: "50px",
        color: "green",
      }}
    >
      {title} <IoMdCheckmark />
    </div>
  )
}

export default RoundedCheckTag
