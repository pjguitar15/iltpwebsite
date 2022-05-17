import React from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'

const ModalBody = ({
  handleSubmit,
  submitLoading,
  setTitleInput,
  titleInput,
  setDateInput,
  dateInput,
  setSelectValue,
  setContentInput,
  contentInput,
  setImageSelected,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group mb-1'>
          <label for='exampleFormControlTextarea1' className='my-2'>
            Add title
          </label>
          <input
            required
            disabled={submitLoading}
            onChange={(e) => setTitleInput(e.target.value)}
            type='text'
            placeholder='Add title'
            value={titleInput}
            className='form-control'
          />
        </div>
        {/* Date Input */}
        <div className='form-group mb-1'>
          <label for='exampleFormControlTextarea1' className='my-2'>
            Add Date
          </label>
          <input
            required
            disabled={submitLoading}
            onChange={(e) => setDateInput(e.target.value)}
            type='text'
            placeholder='Ex: May 15, 2022'
            value={dateInput}
            className='form-control'
          />
        </div>
        {/* News type */}
        <div className='form-group mb-1'>
          <label for='exampleFormControlTextarea1' className='my-2'>
            News Type
          </label>
          <Form.Select
            disabled={submitLoading}
            required
            onChange={(e) => setSelectValue(e.target.value)}
            aria-label='Default select example'
          >
            <option>Select</option>
            <option value='latest'>Latest</option>
            <option value='featured'>Featured</option>
          </Form.Select>
        </div>
        <div class='form-group'>
          <label for='exampleFormControlTextarea1' className='my-2'>
            Edit your content
          </label>
          <textarea
            required
            disabled={submitLoading}
            onChange={(e) => setContentInput(e.target.value)}
            value={contentInput}
            placeholder='Add content here'
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='7'
          ></textarea>
        </div>
        <div className='form-group'>
          <label for='exampleFormControlTextarea1' className='mt-3'>
            Add a photo
          </label>
          <input
            disabled={submitLoading}
            required
            className='form-control'
            type='file'
            onChange={(e) => {
              setImageSelected(e.target.files[0])
            }}
          />
        </div>
        <Button disabled={submitLoading} className='mt-3' type='submit'>
          {submitLoading ? (
            <>
              <Spinner animation='border' variant='light me-2' size='sm' />
              Loading please wait...
            </>
          ) : (
            'Add to database'
          )}
        </Button>
      </form>
    </div>
  )
}

export default ModalBody
