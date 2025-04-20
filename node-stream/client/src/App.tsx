import { VideoPlayer } from "6pp";
import { useState } from "react";

export default function App() {
  const [quality, setQuality] = useState<number>(1080);
  return (
    <div>
      {/* <VideoPlayer captions="" src="http://localhost:3000/video" setQuality={setQuality}/> */}
      <video src="http://localhost:3000/video" controls>
      </video>
    </div>
  )
}
