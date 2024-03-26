import React, { useEffect, useState } from 'react'
import FullScreenImage from './FullScreenImage'

const ExtraPhotosPreview = ({ content2Input, images }) => {
  const [selectedPreview, setSelectedPreview] = useState('')

  return (
    <div className='pt-5 col-11 col-sm-10 col-lg-10 col-xl-7 mx-auto'>
      {selectedPreview && (
        <div className='d-none d-lg-block'>
          <FullScreenImage
            selectedPreview={selectedPreview}
            setSelectedPreview={setSelectedPreview}
          />
        </div>
      )}

      <div>
        {images ? (
          images.length <= 3 ? (
            <div className='row px-2'>
              {images.map((item, index) => {
                if (index < 2) {
                  return (
                    <div
                      key={index}
                      className={`${images.length === 3 && `col-lg-6`}
                    ${images.length === 2 && `col-lg-6`} 
                    py-1 px-1 news-image-item`}
                      onClick={() => setSelectedPreview(item)}
                    >
                      <img
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '300px',
                        }}
                        src={item}
                        alt=''
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className={`${images.length === 3 && `col-lg-12`}
                    ${images.length === 2 && `col-lg-6`} 
                    py-1 px-1 news-image-item`}
                      onClick={() => setSelectedPreview(item)}
                    >
                      <img
                        style={{
                          objectFit: 'cover',
                          objectPosition: '50% 60%',
                          width: '100%',
                          height: '300px',
                        }}
                        src={item}
                        alt=''
                      />
                    </div>
                  )
                }
              })}
            </div>
          ) : (
            images.length <= 10 && (
              <div className='d-flex flex-wrap gap-2 justify-content-start'>
                {images.map((item, index) => (
                  <div
                    key={index}
                    className='py-0 news-image-item'
                    style={{
                      flex: '1 0 350px',
                    }}
                    onClick={() => setSelectedPreview(item)}
                  >
                    <img
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '350px',
                      }}
                      src={item}
                      alt=''
                    />
                  </div>
                ))}
              </div>
            )
          )
        ) : (
          <div className='row px-2'>
            {Array.from({ length: 3 }).map((item, index) => (
              <div key={index} className='col-lg-4 py-0 px-1'>
                <img
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '300px',
                  }}
                  src={
                    'https://htmlcolorcodes.com/assets/images/colors/dark-gray-color-solid-background-1920x1080.png'
                  }
                  alt=''
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <p
        style={{
          color: '#7c7c7c',
          textAlign: 'justify',
          whiteSpace: 'pre-line',
        }}
        className='slug-content mt-2 rubik-400'
      >
        {content2Input ? content2Input : 'Empty secondary content'}
      </p>
    </div>
  )
}

export default ExtraPhotosPreview
