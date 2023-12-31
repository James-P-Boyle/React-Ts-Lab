import { useEffect, useRef, useState } from "react"

type Options = {
  threshold: number
  reappear?: boolean
}

export default function useElementOnScreen(options: Options): [React.RefObject<HTMLDivElement>, boolean] {

  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const makeAppear = (entries: IntersectionObserverEntry[]): void => {
    const [ entry ] = entries

    if(entry.isIntersecting){
      setIsVisible(true)
    }
  }

  const makeAppearRepeating = (entries: IntersectionObserverEntry[]) => {
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }

  const callback = options.reappear ? makeAppearRepeating : makeAppear

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    const observer = new IntersectionObserver(callback, options)

    if(containerRefCurrent) {
      observer.observe(containerRefCurrent)
    }

    return () => {
      if(containerRefCurrent) {
        observer.unobserve(containerRefCurrent)
      }
    }
  }, [containerRef, options, callback])



  return [ containerRef, isVisible ]
}