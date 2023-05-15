import Corners from "@uiw/react-github-corners";
import { repository } from "../../../package.json";

export function GitHubCorners() {
  const repo = repository as { url: string };

  return <Corners position="right" className="z=111" href={repo.url} />;
}
