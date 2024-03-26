import React from 'react'
import { IoMdTime } from 'react-icons/io'
import ExtraPhotosPreview from '../../../News/ExtraPhotosPreview'

const AddNewsPreview = ({
  titleInput,
  locationInput,
  dateInput,
  contentInput,
  featuredImagePreview,
  content2Input,
  multipleImagePreview,
}) => {
  return (
    <div
      className='rubik-400 pt-3'
      style={{ height: '93vh', overflowY: 'scroll' }}
    >
      <h4>Preview</h4>
      <div>
        <div className='slug-img-parent-preview'>
          {featuredImagePreview ? (
            <img className='slug-img' src={featuredImagePreview} alt='cover' />
          ) : (
            <img
              className='slug-img'
              src={
                'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'
              }
              alt='cover'
            />
          )}

          <h1 className='news-slug-absolute-text text-capitalize col-11 text-center display-5'>
            {titleInput === '' ? 'Empty Title' : titleInput}
          </h1>
        </div>

        <div
          // ref={startOfImage}
          className='py-5 col-9 mx-auto'
        >
          <div>
            <div className='col-12 col-lg-10 col-xl-8'>
              {featuredImagePreview ? (
                <img
                  className='slug-img-within-container mb-4 rounded'
                  src={featuredImagePreview}
                  alt='portrait'
                />
              ) : (
                <img
                  className='slug-img-within-container mb-4 rounded'
                  src={
                    'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'
                  }
                  alt='portrait'
                />
              )}
            </div>
            <h2
              className='mb-4 mt-3 text-dark ps-3'
              style={{
                borderLeft: 'solid #00B2B2 5px',
                letterSpacing: '1px',
              }}
            >
              {titleInput === '' ? 'Empty Title' : titleInput}
            </h2>
            <p className='text-muted opensans-thin'>
              <i
                className='bi bi-geo-alt-fill me-2'
                style={{ color: 'orange', fontSize: '20px' }}
              ></i>
              {locationInput === '' ? 'Empty Location' : locationInput}
            </p>
            <p className='text-muted'>
              <IoMdTime
                className='me-1'
                style={{ fontSize: '20px', color: 'orange' }}
              />
              {dateInput === '' ? 'Empty Date' : dateInput}
            </p>
            <p
              style={{
                color: '#6d6d6d',
                textAlign: 'justify',
                whiteSpace: 'pre-line',
              }}
              className='slug-content mt-2 rubik-400'
            >
              {contentInput === '' ? 'Empty Content' : contentInput}
            </p>
          </div>
        </div>
        <div style={{ background: '#f3f3f3' }}>
          <ExtraPhotosPreview
            content2Input={content2Input}
            images={multipleImagePreview}
          />
          <div className='col-9 mx-auto'>
            {/* <Button
                style={{ borderRadius: "50px", transition: "300ms" }}
                variant="outline-dark mb-5 mt-4 rubik-400 px-4"
              >
                Back to News
              </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewsPreview
