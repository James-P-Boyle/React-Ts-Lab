import { useRef, useState } from "react"
import Draggable from "./Sample"

const pages = [
  {
    name: 'Red',
    hexColor: '#FF0000',
    title: 'Primary Color',
  },
  {
    name: 'Green',
    hexColor: '#00FF00',
    title: 'Secondary Color',
  },
  {
    name: 'Blue',
    hexColor: '#0000FF',
    title: 'Accent Color',
  },

]

export default function SwipePage() {

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const touchStartXRef = useRef<number | null>(null)

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault()
    console.log('touced')
    touchStartXRef.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].clientX
    const touchDeltaX = touchEndX - (touchStartXRef.current ?? touchEndX)

    if (touchDeltaX > 0) {
      goToPreviousPage()
    } else if (touchDeltaX < 0) {
      goToNextPage()
    }
  }

  const goToNextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length)
  }

  const goToPreviousPage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pages.length - 1 : prevIndex - 1
    )
  }


  return (
    <div
      className="flex flex-col gap-2 p-4"

    >
      {/* <div
        style={{ backgroundColor: pages[currentIndex].hexColor }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="min-h-[500px]"
      >
        {pages[currentIndex].name}
      </div> */}
      <Draggable
        onSwipeLeft={() => {
          console.log('swipe LEFT called')
        }}
        onSwipeRight={() => {
          console.log('swipe right called')
        }}
      >
        <SampleDiv/>
      </Draggable>
      <div className="flex justify-between">
        {/* <button onClick={goToPreviousPage}>&lt Previous</button>
        <button onClick={goToNextPage}>Next &gt</button> */}
      </div>
  </div>
  )
}

function SampleDiv() {

  return (
    <div>
      <h1>im a sample</h1>
    </div>
  )
}