import React, { useEffect, useRef } from 'react'

const FullScreenImage = ({ selectedPreview, setSelectedPreview }) => {
  const previewRef = useRef()
  useEffect(() => {
    previewRef.current.scrollIntoView()
  }, [selectedPreview])
  return (
    <div
      ref={previewRef}
      className='d-flex justify-content-center align-items-center overflow-hidden'
      style={{
        position: 'fixed',
        right: '0',
        top: '0',
        left: '0',
        bottom: '0',
        padding: '10px',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        onClick={() => setSelectedPreview('')}
        className='bg-black w-100'
        style={{
          position: 'fixed',
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          opacity: 0.8,
          zIndex: '999',
          height: '100vh',
        }}
      ></div>

      <div
        className='position-relative'
        style={{
          width: 'auto',
          height: '90%',
          zIndex: '9999',
          marginTop: '3rem',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={selectedPreview}
          alt=''
        />
        <div
          onClick={() => setSelectedPreview('')}
          style={{
            position: 'absolute',
            right: '2rem',
            top: '0',
            color: 'red',
            fontSize: '40px',
            cursor: 'pointer',
          }}
        >
          ×
        </div>
      </div>
    </div>
  )
}

export default FullScreenImage
