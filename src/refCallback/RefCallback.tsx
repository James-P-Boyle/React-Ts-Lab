import { useEffect, useRef, useState } from "react"

export default function RefCallback(){

  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

  const ref = useRef<HTMLDivElement | null>(null);

  const isIntersecting = useIsInView(ref)

  return (
    <>
    <div className={`${isIntersecting && 'bg-green-600'} h-screen border`}>

    </div>
    {loading ? (
      <h2>loading</h2>
    ) : (
      <div className="" ref={ref}>
        h1
      </div>
    )}

    </>
  )
}

function useIsInView(ref: React.MutableRefObject<HTMLDivElement | null>) {

  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  useEffect(() => {
    if(ref.current !== null){

      const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    })

      observer.observe(ref.current)
    }

  }, [ref])

  return isIntersecting
}