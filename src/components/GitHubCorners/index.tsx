import Corners from '@uiw/react-github-corners';
import { repository } from '../../../package.json';

export default function GitHubCorners() {
  const repo = repository as { url: string };

  return (
    <Corners
      position="right"
      href={repo.url}
    />
  );
}
