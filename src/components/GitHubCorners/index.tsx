import Corners from '@uiw/react-github-corners'
import { repository } from '../../../package.json'

export function GitHubCorners() {
  const repo = repository as { url: string }
  const zIndex = 666
  return <Corners position="right" zIndex={zIndex} href={repo.url} />
}
