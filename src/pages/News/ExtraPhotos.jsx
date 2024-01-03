import React from "react"

const ExtraPhotos = ({ length }) => {
  return (
    <div className="pt-5 col-11 col-sm-10 col-xl-7 mx-auto">
      <div className="row px-2">
        {Array.from({ length }).map((item, index) => (
          <div key={index} className="col-lg-4 py-0 px-0">
            {/* http://res.cloudinary.com/philcob/image/upload/v1701735199/wn01fkf6daqmljjx4vda.jpg */}
            {index === 0 && (
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px",
                }}
                src="http://res.cloudinary.com/philcob/image/upload/v1701737988/d1uwdyzxifnpwo47vfxa.png"
                alt=""
              />
            )}
            {index === 1 && (
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px",
                }}
                src="http://res.cloudinary.com/philcob/image/upload/v1701735199/wn01fkf6daqmljjx4vda.jpg"
                alt=""
              />
            )}
            {index === 2 && (
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "300px",
                }}
                src="http://res.cloudinary.com/philcob/image/upload/v1701731860/vi4l68fv3ywv2dr9bkny.jpg"
                alt=""
              />
            )}
          </div>
        ))}
      </div>
      <p
        style={{
          color: "#7c7c7c",
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
        className="slug-content mt-2 rubik-400"
      >
        ILTP is glad to introduce our Main Speaker for the upcoming Winter Youth
        Leadership Conference and Vision for 2024: "Peace Starts with Me." Mr.
        Ronnie Sodusta, the Asia-Pacific President of “International Association
        of Youth and Students for Peace, the IAYSP is one of affiliated
        organizations of ILTF. He is an award-winning youth leader not just in
        the Philippines but also in Asia, and now conquering the globe to
        promote peace and constantly inspiring young people. On his topics
        tackling about the role of Youth in Nation-Building, surely ILTP
        participants would love to hear more about.
      </p>
    </div>
  )
}

export default ExtraPhotos
