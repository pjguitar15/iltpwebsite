import React, { useRef, useState } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import AddNewsPreview from "./AddNewsPreview"
import { IoMdCheckmark } from "react-icons/io"
import RoundedCheckTag from "../../../../components/RoundedCheckTag"

const ModalBody = ({
  handleSubmit,
  submitLoading,
  setTitleInput,
  titleInput,
  setDateInput,
  locationInput,
  setLocationInput,
  dateInput,
  setSelectValue,
  setContentInput,
  contentInput,
  setImageSelected,
  imageSelected,
  content2Input,
  setContent2Input,
  selectValue,
  featuredImagePreview,
  isTitleConfirmed,
  isLocationConfirmed,
  isDateConfirmed,
  isNewsTypeConfirmed,
  setFeaturedImagePreview,
  setIsTitleConfirmed,
  setIsLocationConfirmed,
  setIsDateConfirmed,
  setIsNewsTypeConfirmed,
  images,
  setImages,
  multipleImagePreview,
  setMultipleImagePreview,
}) => {
  const multipleImageRef = useRef(null)
  return (
    <div className="row">
      <div
        className="col-4 bg-dark p-5 m-0"
        style={{ height: "93vh", overflowY: "scroll" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-2 flex-wrap mb-3">
            {featuredImagePreview && <RoundedCheckTag title="Featured Image" />}
            {isTitleConfirmed && <RoundedCheckTag title="Title" />}
            {isLocationConfirmed && <RoundedCheckTag title="Location" />}
            {isDateConfirmed && <RoundedCheckTag title="Date" />}
            {isNewsTypeConfirmed && <RoundedCheckTag title="Type" />}
          </div>

          {!featuredImagePreview && (
            <div className="form-group">
              <label
                for="exampleFormControlTextarea1"
                className="mt-3text-white text-white"
              >
                Add a featured photo
              </label>
              <input
                disabled={submitLoading}
                required
                className="form-control"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0]
                  console.log(file)
                  setImageSelected(file)
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = (e) => {
                      setFeaturedImagePreview(e.target.result)
                    }
                    reader.readAsDataURL(file)
                  }
                }}
              />
            </div>
          )}

          {!isTitleConfirmed && (
            <div className="form-group mb-1">
              <label
                for="exampleFormControlTextarea1"
                className="my-2 text-white"
              >
                Add Title
              </label>
              <div className="d-flex gap-2">
                <input
                  required
                  disabled={submitLoading}
                  onChange={(e) => setTitleInput(e.target.value)}
                  type="text"
                  placeholder="Add title"
                  value={titleInput}
                  className="form-control"
                />
                <button
                  type="button"
                  disabled={titleInput === ""}
                  onClick={() => setIsTitleConfirmed(true)}
                  className="rounded px-3 d-flex align-items-center"
                  style={{
                    background: "lightgreen",
                    color: "darkgreen",
                    border: "none",
                    opacity: titleInput === "" ? 0.6 : 1,
                    cursor: "not-allowed !important",
                  }}
                >
                  <IoMdCheckmark />
                </button>
              </div>
            </div>
          )}

          {/* Location Input */}
          {!isLocationConfirmed && (
            <div className="form-group mb-1">
              <label
                for="exampleFormControlTextarea1"
                className="my-2 text-white"
              >
                Add Location
              </label>
              <div className="d-flex gap-2">
                <input
                  required
                  disabled={submitLoading}
                  onChange={(e) => setLocationInput(e.target.value)}
                  type="text"
                  placeholder="Ex: New Jersey, USA"
                  value={locationInput}
                  className="form-control"
                />
                <button
                  type="button"
                  disabled={locationInput === ""}
                  onClick={() => setIsLocationConfirmed(true)}
                  className="rounded px-3 d-flex align-items-center"
                  style={{
                    background: "lightgreen",
                    color: "darkgreen",
                    border: "none",
                    opacity: locationInput === "" ? 0.6 : 1,
                    cursor: "not-allowed !important",
                  }}
                >
                  <IoMdCheckmark />
                </button>
              </div>
            </div>
          )}

          {/* Date Input */}
          {!isDateConfirmed && (
            <div className="form-group mb-1">
              <label
                for="exampleFormControlTextarea1"
                className="my-2 text-white"
              >
                Add Date
              </label>
              <div className="d-flex gap-2">
                <input
                  required
                  disabled={submitLoading}
                  onChange={(e) => setDateInput(e.target.value)}
                  type="text"
                  placeholder="Ex: May 15, 2022"
                  value={dateInput}
                  className="form-control"
                />
                <button
                  type="button"
                  disabled={dateInput === ""}
                  onClick={() => setIsDateConfirmed(true)}
                  className="rounded px-3 d-flex align-items-center"
                  style={{
                    background: "lightgreen",
                    color: "darkgreen",
                    border: "none",
                    opacity: dateInput === "" ? 0.6 : 1,
                    cursor: "not-allowed !important",
                  }}
                >
                  <IoMdCheckmark />
                </button>
              </div>
            </div>
          )}

          {/* News type */}
          {!isNewsTypeConfirmed && (
            <div className="form-group mb-1">
              <label
                for="exampleFormControlTextarea1"
                className="my-2 text-white"
              >
                News Type
              </label>
              <div className="d-flex gap-2">
                <Form.Select
                  disabled={submitLoading}
                  required
                  onChange={(e) => setSelectValue(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>Select</option>
                  <option value="latest">Latest</option>
                  <option value="featured">Featured</option>
                </Form.Select>
                <button
                  type="button"
                  disabled={selectValue === ""}
                  onClick={() => setIsNewsTypeConfirmed(true)}
                  className="rounded px-3 d-flex align-items-center"
                  style={{
                    background: "lightgreen",
                    color: "darkgreen",
                    border: "none",
                    opacity: selectValue === "" ? 0.6 : 1,
                    cursor: "not-allowed !important",
                  }}
                >
                  <IoMdCheckmark />
                </button>
              </div>
            </div>
          )}

          <div className="form-group">
            <label
              for="exampleFormControlTextarea1"
              className="my-2 text-white"
            >
              Edit your content
            </label>
            <textarea
              required
              disabled={submitLoading}
              onChange={(e) => setContentInput(e.target.value)}
              value={contentInput}
              placeholder="Add content here"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>

          {/* New input for multiple images */}
          <div className="form-group">
            <label className="mt-3 text-white">Upload multiple images</label>
            <input
              disabled={submitLoading}
              required
              className="form-control"
              type="file"
              ref={multipleImageRef}
              onChange={(e) => {
                const files = e.target.files
                const filesArray = Array.from(files)
                console.log(filesArray)
                setImages(filesArray)

                // Use FileReader to read image files and convert them to data URLs
                const imagePreviews = []

                for (let i = 0; i < files.length; i++) {
                  const reader = new FileReader()

                  reader.onload = (event) => {
                    imagePreviews.push(event.target.result)

                    // If all images have been processed, update the state
                    if (imagePreviews.length === files.length) {
                      setMultipleImagePreview(imagePreviews)
                    }
                  }

                  // Read the image file as a data URL
                  reader.readAsDataURL(files[i])
                }
              }}
              multiple // Allow multiple file selection
            />
          </div>

          <div className="form-group">
            <label
              for="exampleFormControlTextarea2"
              className="my-2 text-white"
            >
              Edit secondary content
            </label>
            <textarea
              required
              disabled={submitLoading}
              onChange={(e) => setContent2Input(e.target.value)}
              value={content2Input}
              placeholder="Add content here"
              className="form-control"
              id="exampleFormControlTextarea2"
              rows="4"
            ></textarea>
          </div>

          <Button
            disabled={submitLoading}
            className="mt-3 px-4"
            variant="light"
            type="submit"
            style={{ borderRadius: "50px" }}
          >
            {submitLoading ? (
              <>
                <Spinner animation="border" variant="light me-2" size="sm" />
                Loading please wait...
              </>
            ) : (
              "Upload"
            )}
          </Button>
          <Button
            disabled={submitLoading}
            className="mt-3 px-4 ms-2"
            variant="outline-light"
            type="submit"
            style={{ borderRadius: "50px" }}
            onClick={() => {
              setTitleInput("")
              setIsTitleConfirmed(false)
              setIsLocationConfirmed(false)
              setIsDateConfirmed(false)
              setIsNewsTypeConfirmed(false)
              setContentInput("")
              setLocationInput("")
              setFeaturedImagePreview(null)
              setDateInput("")
              setContent2Input("")
              setImages([])
              setMultipleImagePreview(null)

              if (multipleImageRef.current) {
                multipleImageRef.current.value = null
              }
            }}
          >
            Reset
          </Button>
        </form>
      </div>
      <div className="col-8">
        <AddNewsPreview
          titleInput={titleInput}
          locationInput={locationInput}
          dateInput={dateInput}
          contentInput={contentInput}
          featuredImagePreview={featuredImagePreview}
          content2Input={content2Input}
          multipleImagePreview={multipleImagePreview}
        />
      </div>
    </div>
  )
}

export default ModalBody
