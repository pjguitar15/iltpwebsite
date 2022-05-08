import React from 'react'
import { Modal } from 'react-bootstrap'

const NewsPageModal = ({ modalShow, setModalShow, currentItem }) => {
  return (
    <div>
      <Modal
        size='lg'
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Update News Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-group mb-4'>
            <label for='exampleFormControlTextarea1' className='my-2'>
              Edit title
            </label>
            <input
              type='text'
              value={currentItem.title}
              className='form-control'
            />
          </div>
          <div class='form-group'>
            <label for='exampleFormControlTextarea1' className='my-2'>
              Edit your content
            </label>
            <textarea
              value={currentItem.content}
              class='form-control'
              id='exampleFormControlTextarea1'
              rows='7'
            ></textarea>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewsPageModal
