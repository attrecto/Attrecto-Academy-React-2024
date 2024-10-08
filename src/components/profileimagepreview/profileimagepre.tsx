// ProfileImagePreview.js
import React from "react";

const ProfileImagePreview = ({ imageUrl }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ddd",
          }}
        />
      ) : (
        <p>No image provided</p>
      )}
    </div>
  );
};

export default ProfileImagePreview;
