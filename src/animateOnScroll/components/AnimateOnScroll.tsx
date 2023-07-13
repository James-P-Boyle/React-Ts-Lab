import useElementOnScreen from "../hooks/useElementOnScreen"

interface AnimateOnScrollProps {
  children: React.ReactNode
  reappear?: boolean;
  threshold?: number;
  direction?: 'left' | 'right';
}

export default function AnimateOnScroll({
  children,
  reappear,
  threshold = 0.5,
  direction = 'left'
}: AnimateOnScrollProps) {

  const [ containerRef, isVisible ] = useElementOnScreen({
    threshold,
    reappear
  })

  const translateAxis = direction === 'left' ? '-' : ''

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-1000
          ${
            isVisible
              ? 'opacity-100 blur-none translate-x-0'
              : `opacity-0 blur-lg ${translateAxis}translate-x-60`
          }
          motion-reduce:transition-none motion-reduce:hover:transform-none`}
      >
        {children}
      </div>
    </>
  )
}

