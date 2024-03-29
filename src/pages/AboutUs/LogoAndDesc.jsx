import React from 'react'
// ILTP logo here
import ILTPLogo from '../../assets/iltp-logo.png'
const LogoAndDesc = () => {
  return (
    <div>
      <div className='col-3 col-lg-2 mx-auto'>
        <img src={ILTPLogo} className='w-100' alt='iltp logo' />
      </div>
      <h2 className='text-center my-4 font-poppins-500'>
        International Leadership Training Program
      </h2>
      <p
        className='text-justify col-lg-8 mx-auto font-poppins-400 text-muted px-4'
        style={{
          textAlign: 'center',
          lineHeight: '40px',
        }}
      >
        The International Leadership Training Program (ILTP) is a 501(c)(3)
        non-profit organization that serves in the United States since 2001. Its
        mission is to raise young conscientious leaders who can contribute to
        peace-building efforts around the world. People coming from different
        countries joined the program and became active community leaders in
        their home countries.
      </p>
    </div>
  )
}

export default LogoAndDesc
