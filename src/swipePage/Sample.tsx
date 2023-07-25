import { useRef, useState } from 'react'

interface DraggableProps {
  children: React.ReactNode
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export default function Draggable({children, onSwipeLeft, onSwipeRight}: DraggableProps) {
  const recRef = useRef<HTMLDivElement | null>(null)
  const startXRef = useRef<number>(0);
  const [style, setStyle] = useState({})

  const handleDrag = (e: React.DragEvent<HTMLElement>) => {
    const mouseX = e.clientX;

    console.log('mouseX', mouseX)

    // if (recRef.current && mouseX > 20) {
    //   setStyle({
    //     transform: `translate(${mouseX}px)`,
    //   });
    // }

    if (recRef.current && mouseX > 20) {
      const deltaX = mouseX - startXRef.current ?? 0;
      if (deltaX > 0 && onSwipeRight) {
        setStyle({
          transform: `translateX(${mouseX}px)`,
        });
        onSwipeRight();
      } else if (deltaX < 0 && onSwipeLeft) {
        setStyle({
          transform: `translateX(-${mouseX}px)`,
        });
        onSwipeLeft();
      }
    }

  };

  return (
    <div className='relative h-screen'>
      <div
        id='targetEl'
        ref={recRef}
        draggable='true'
        onDragStart={(e: React.DragEvent<HTMLElement>) => setStartX(e.clientX)}
        onDrag={handleDrag}
        style={{
          ...style,
          transition: 'transform 0.8s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}

