import React from "react"

const ExtraPhotosPreview = ({ content2Input, images }) => {
  return (
    <div className="pt-5 col-9 mx-auto">
      <div>
        {images ? (
          images.length <= 3 ? (
            <div className="row px-2">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`${images.length === 3 && `col-lg-4`}
                    ${images.length === 2 && `col-lg-6`} 
                    py-0 px-1`}
                >
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
            </div>
          ) : (
            images.length === 4 && (
              <div className="d-flex flex-wrap gap-2">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="py-0"
                    style={{
                      flex: "1 0 250px",
                    }}
                  >
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
              </div>
            )
          )
        ) : (
          <div className="row px-2">
            {Array.from({ length: 3 }).map((item, index) => (
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
            ))}
          </div>
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
