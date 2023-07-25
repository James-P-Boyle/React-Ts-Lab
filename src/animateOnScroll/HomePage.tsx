import AnimateOnScroll from "./components/AnimateOnScroll"

interface SampleComponentProps {
  children: React.ReactNode
}

export default function HomePage() {

  return (
    <>
      <SampleComponent>I'm a normal div</SampleComponent>
      <AnimateOnScroll direction="right" reappear={true}>
        <SampleComponent>I'm appear on scroll</SampleComponent>
      </AnimateOnScroll>
      <AnimateOnScroll reappear={true} direction="left">
        <SampleComponent>I'm appear on scroll</SampleComponent>
      </AnimateOnScroll>
    </>
  )
}

const SampleComponent = ({ children }: SampleComponentProps) => {
  return (
    <div className='grid h-screen grid-cols-1 place-items-center'>
      <h1 className='p-20 text-white bg-blue-700 rounded-xl'>{children}</h1>
    </div>
  )
}
