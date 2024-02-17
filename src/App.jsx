import './App.css'
import Calculator from './assets/components/Calculator/Calculator'
import Timer from './assets/components/Timer/Timer'
import { useCurrentDate } from './assets/hooks/useCurrentDate'

function App() {
  const { currentDate } = useCurrentDate()

  return (
    <>
      <Timer currentDate={currentDate} />
      <Calculator />
    </>
  )
}

export default App