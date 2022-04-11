import { useEffect } from "react";

export default function Record({ title, artist, artworkURL, discogsURL }) {
  return (
    <li class="record">
      <a href={discogsURL}>
        <div class="shadow">
          <div
            data-tilt
            data-tilt-scale="1.05"
            data-tilt-glare
            data-tilt-reverse="false"
            data-tilt-max-glare="0.5"
            class="wrapper"
          >
            <div class="center">
              <img class="art" src={artworkURL} alt="" />
            </div>
          </div>
        </div>

        <div class="metadata">
          <p class="title">{title}</p>
          <p class="artist">{artist}</p>
        </div>
      </a>
    </li>
  );
}
