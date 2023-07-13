import { useEffect, useState } from "react"

export default function useIsInView() {


  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    console.log('hey')

  }, [])

  return {

  }

}