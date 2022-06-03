import { useRef, useEffect } from "react"
import VanillaTilt from "vanilla-tilt"

function Tilt({ options, children, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    VanillaTilt.init(ref.current, options)
  }, [])

  return (
    <div className="wrapper">
      <div ref={ref} {...props}>
        {children}

        <div className="js-tilt-glare">
          <div className="js-tilt-glare-inner" />
        </div>
      </div>
    </div>
  )
}

export default function Record({ title, artist, artworkURL, discogsURL }) {
  return (
    <li className="record">
      <a href={discogsURL}>
        <div className="center">
          <img className="art" src={artworkURL} alt="" />
        </div>

        <div className="metadata">
          <p className="title">{title}</p>
          <p className="artist">{artist}</p>
        </div>
      </a>
    </li>
  )
}
