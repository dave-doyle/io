import React, { useEffect, useState } from "react";
import Sketchfab from "@sketchfab/viewer-api";
import { motion} from "framer-motion";

const SecondEmbed = () => {
  const [isDelayed, setIsDelayed] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  

  useEffect(() => {
    // Simulate a delay before showing the component
    const delayTimeout = setTimeout(() => {
      setIsDelayed(false); // Set the delay to false after the timeout
    }, 2000);

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (!isDelayed && windowWidth > 768) {
      const iframe = document.getElementById("sketchfab-iframe");
      const uid = "7bb6e720499a467b8e0427451d180063";

      const client = new Sketchfab("1.12.1", iframe);

      client.init(uid, {
        success: function onSuccess(api) {
          api.start();
          api.addEventListener("viewerready", function () {
            console.log("Viewer is ready");

            
            api.load();
          });
        },
        error: function onError() {
          console.log("Viewer error");
        },
        autostart: 1,
        camera: 2,
      });
    }
  }, [isDelayed, windowWidth]);

  return (
    <div>
      {!isDelayed && windowWidth > 768 && (
        <div
          id="sketchfab-container"
          className="sketchfab-embed-wrapper"
          style={{ position: "fixed", width: "18vw", height: "100%",zIndex:'3' }}
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
            src=""
            position="fixed"
            controls="0"
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "24vh",
              background: "black",
            }}
          />
        </div>
      )}
      {/* black background
      <motion.div
        initial={{ height: 0, top: "100%" }} // Set initial top position to 100%
        animate={{ height: "100%", top: 0 }} // Animate top position to 0%
        transition={{ duration: 3.2 }} // Adjust the duration as needed
        style={{
          width: "19%", // Set width to cover the screen horizontally
          background: "red",
          position: "absolute",
          top: 0,
          left: "0%",
          zIndex: -3,
        }}
      ></motion.div> */}
    </div>
  );
};

export default SecondEmbed;
