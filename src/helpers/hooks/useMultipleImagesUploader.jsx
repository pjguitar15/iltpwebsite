import { useState } from "react"
import Axios from "axios"

const useMultipleImagesUploader = () => {
  const [uploadError, setUploadError] = useState(null)

  const uploadImages = async (images) => {
    const uploadPromises = images.map((image) => {
      const formData = new FormData()
      formData.append("file", image)
      formData.append("upload_preset", "iltp-news-images")

      return Axios.post(
        `https://api.cloudinary.com/v1_1/philcob/image/upload`,
        formData
      )
        .then((response) => response.data)
        .catch((error) => {
          console.error("Error uploading to Cloudinary:", error)
          throw error
        })
    })

    try {
      // Wait for all upload promises to complete
      const results = await Promise.all(uploadPromises)
      return results
    } catch (error) {
      // Handle errors, if any
      console.error("Error uploading images:", error)
      setUploadError(error)
    }
  }

  return { uploadImages, uploadError }
}

export default useMultipleImagesUploader
