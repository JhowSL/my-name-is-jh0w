import type React from "react";
import { GithubButton } from "../../components/button/profile-github-button";

interface RepositoryLinkProps {
  url: string;
  repoName: string;
}

const RepositoryLink: React.FC<RepositoryLinkProps> = ({ url, repoName }) => {
  const isValidUrl = (url: string | URL) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return isValidUrl(url) ? (
    <GithubButton href={url} text={repoName} />
  ) : (
    <span>{url}</span>
  );
};

export default RepositoryLink;
