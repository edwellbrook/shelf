import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt({ options, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    VanillaTilt.init(ref.current, options);
  }, []);

  return <div ref={ref} {...props} />;
}

export default function Record({ title, artist, artworkURL, discogsURL }) {
  return (
    <li className="record">
      <a href={discogsURL}>
        <div className="shadow">
          <Tilt
            className="wrapper"
            options={{
              scale: 1.05,
              reverse: false,
              glare: true,
              "max-glare": 0.5,
            }}
          >
            <div className="center">
              <img className="art" src={artworkURL} alt="" />
            </div>
          </Tilt>
        </div>

        <div className="metadata">
          <p className="title">{title}</p>
          <p className="artist">{artist}</p>
        </div>
      </a>
    </li>
  );
}
