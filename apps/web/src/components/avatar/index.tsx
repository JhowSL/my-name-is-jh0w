import React from "react";

interface AvatarProfileProps {
  src: string;
  alt: string;
}

export default function AvatarProfile(props: Readonly<AvatarProfileProps>) {
  return (
    <div className="profile_avatar">
      <img src={props.src} loading="lazy" alt={props.alt} />
    </div>
  );
}
