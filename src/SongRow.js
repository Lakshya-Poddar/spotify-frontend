import React from "react";
import "./SongRow.css";
function SongRow({ track }) {
  console.log("track", track);
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((atrist) => atrist.name).join(",")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
