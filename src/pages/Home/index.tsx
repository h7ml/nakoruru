import OverviewFlow from '@/components/OverviewFlow';
import GitHubCorners from "@/components/GitHubCorners"
export default function Home() {
  return (
    <>
      <div className='h-full w-full'>
        <OverviewFlow />
        <GitHubCorners />
      </div>
    </>
  )
}
