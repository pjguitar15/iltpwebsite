import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useCheckAuthAndNavigate = (path) => {
  const navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token")

    if (authToken) {
      navigate(path)
    } else {
      navigate("/admin")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]) // Include 'path' in the dependency array to trigger the effect when 'path' changes
}

export default useCheckAuthAndNavigate
