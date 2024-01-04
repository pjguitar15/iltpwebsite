import React from "react"

const ExtraPhotosPreview = ({ content2Input, images }) => {
  return (
    <div className="pt-5 col-9 mx-auto">
      <div className="row px-2">
        {images && images.length === 3 ? (
          <>
            {images.map((item, index) => (
              <div key={index} className="col-lg-4 py-0 px-1">
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                  }}
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </>
        ) : (
          Array.from({ length: 3 }).map((item, index) => (
            <div key={index} className="col-lg-4 py-0 px-1">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px",
                }}
                src={
                  "https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png"
                }
                alt=""
              />
            </div>
          ))
        )}
      </div>
      <p
        style={{
          color: "#7c7c7c",
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
        className="slug-content mt-2 rubik-400"
      >
        {content2Input ? content2Input : "Empty secondary content"}
      </p>
    </div>
  )
}

export default ExtraPhotosPreview
