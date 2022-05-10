import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const NewsPageModal = ({
  updateModalShow,
  setUpdateModalShow,
  currentItem,
}) => {
  const [title, setTitle] = useState(currentItem.title)
  const [content, setContent] = useState(currentItem.content)
  return (
    <div>
      <Modal
        size='lg'
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
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
              // onChange={(e) => setTitle(e.target.value)}
              type='text'
              id='titleValue'
              // value={currentItem.title}
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label for='exampleFormControlTextarea1' className='my-2'>
              Edit your content
            </label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
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
