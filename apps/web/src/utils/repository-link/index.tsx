"use client";

import type React from "react";
import { GithubButton } from "../../components/button/profile-github-button";

interface RepositoryLinkProps {
  url: string;
  repoName: string;
}

export function RepositoryLink(props: Readonly<RepositoryLinkProps>) {
  const isValidUrl = (url: string | URL) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  return isValidUrl(props.url) ? (
    <GithubButton href={props.url} text={props.repoName} />
  ) : (
    <span>{props.url}</span>
  );
}
