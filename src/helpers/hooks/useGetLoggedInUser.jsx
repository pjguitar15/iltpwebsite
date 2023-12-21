import { useEffect, useState } from "react"

const useGetLoggedInUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let authToken = sessionStorage.getItem("Auth Token")

  useEffect(() => {
    if (authToken !== null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return { isLoggedIn }
}

export default useGetLoggedInUser
