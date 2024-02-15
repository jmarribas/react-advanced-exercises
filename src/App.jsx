import './App.css'
import Timer from './assets/components/Timer/Timer'
import { useCurrentDate } from './assets/hooks/useCurrentDate'

function App() {
  const currentDate = useCurrentDate()

  return (
    <>
      <Timer currentDate={currentDate} />
    </>
  )
}

export default App