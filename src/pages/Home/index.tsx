import { useState } from 'react'
import { OverviewFlow } from './components'
import GitHubCorners from "@/components/GitHubCorners"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-full w-full'>
        <OverviewFlow />
        <GitHubCorners />
      </div>
    </>
  )
}

export default App