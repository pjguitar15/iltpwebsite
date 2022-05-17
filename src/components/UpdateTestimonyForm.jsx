import React from 'react'
import { Button, Form } from 'react-bootstrap'
const UpdateTestimonyForm = ({
  updateHandler,
  currItem,
  setCurrItem,
  navigate,
}) => {
  return (
    <div>
      {/* Form */}
      <h4 className='text-center mb-4'>Update Testimony Item</h4>
      <Form onSubmit={updateHandler} className='col-xl-6 mx-auto my-3'>
        {/* Image */}
        <div className='col-3'>
          <img className='w-100 rounded' src={currItem[0].img} alt='' />
        </div>
        <Form.Group>
          <Form.Label className='form-text'>Name</Form.Label>
          <Form.Control
            value={currItem[0].name || 'not loaded'}
            onChange={(e) =>
              setCurrItem([{ ...currItem[0], name: e.target.value }])
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='form-text'>Batch</Form.Label>
          <Form.Control
            value={currItem[0].batchYear || 'not loaded'}
            onChange={(e) =>
              setCurrItem([{ ...currItem[0], batchYear: e.target.value }])
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='form-text'>Content</Form.Label>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            value={currItem[0].content || 'not loaded'}
            onChange={(e) =>
              setCurrItem([{ ...currItem[0], content: e.target.value }])
            }
          />
          {/* <Form.Control type='textarea' value={'Test 123'} /> */}
        </Form.Group>
      </Form>
      {/* Button */}
      <div className='text-center col-xl-9 mx-auto'>
        <Button type='submit' size='sm' variant='warning' className='col-8'>
          Update
        </Button>
      </div>
      <div className='text-center col-xl-9 mx-auto'>
        <Button
          variant='primary'
          className='col-8 mt-1'
          onClick={() => navigate('/adminpage')}
          size='sm'
        >
          Go Back
        </Button>
      </div>
      {/* To add image feature, need to pay more */}
      {/* <Form.Group>
        <Form.Label className='form-text'>Image</Form.Label>
        <Form.Control value={'Test 123'} />
      </Form.Group> */}
    </div>
  )
}

export default UpdateTestimonyForm
