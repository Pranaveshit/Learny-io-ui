import React, { useEffect, useState } from "react";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        // Replace the API endpoint with your actual backend URL
        const response = await fetch("http://localhost:3000/videos");
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "800px" }}>
        {videos.map((video) => (
          <div key={video._id} style={{ display: "inline-block", marginRight: "20px" }}>
            <h2>{video.channelName}</h2>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: "0", width: "100%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.url.split('/').pop()}`}
                frameBorder="0"
                allowFullScreen
                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                title="0"
              />
            </div>
            <p>{video.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
