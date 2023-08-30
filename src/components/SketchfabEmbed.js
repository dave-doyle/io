import React, { useEffect } from "react";
import Sketchfab from "@sketchfab/viewer-api";

const SketchfabEmbed = () => {
  useEffect(() => {
    const iframe = document.getElementById("sketchfab-iframe");
    const uid = "97cb73804ec64963863317559eb832e0";

    const client = new Sketchfab("1.12.1", iframe);

    client.init(uid, {
      success: function onSuccess(api) {
        api.start();
        api.addEventListener("viewerready", function () {
          console.log("Viewer is ready");

          // Define the camera position and target
          const cameraPosition = [50, -50, 60]; // X, Y, Z coordinates
          const cameraTarget = [0, 0, 10]; // X, Y, Z coordinates
          const duration = 0.5; // Duration of the camera move in seconds

          // Set the camera view
          api.setCameraLookAt(
            cameraPosition,
            cameraTarget,
            duration,
            function (err) {
              if (!err) {
                console.log("Camera view set");
              }
            }
          );

          api.load(); // Load the model
        });
      },
      error: function onError() {
        console.log("Viewer error");
      },
      autostart: 1, // Start the model immediately
      camera: 5, // Use camera preset 5
    });
  }, []);

  return (
    <div
      id="sketchfab-container"
      className="sketchfab-embed-wrapper"
      style={{ position: "fixed", width: "18%", height: "100%" }}
    >
      <iframe
        id="sketchfab-iframe"
        title="Sketchfab Viewer"
        frameBorder="0"
        allowFullScreen
        mozallowFullScreen="true"
        webkitallowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        width="100%"
        height="100%"
        src="" // Initially empty
        position="fixed"
        controls="0" // Disable default controls
      />
      <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "220px", // Adjust the height as needed to cover the watermark
            background: "black", // Change the color as needed
          }}
        />
      
    </div>
  );
};

export default SketchfabEmbed;
