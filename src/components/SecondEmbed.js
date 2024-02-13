import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SecondEmbed = () => {
  const [isDelayed, setIsDelayed] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //////////////////////////////
  /////Fetching Visitor IP//////
  //////////////////////////////

  const [city, setCity] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Make a request to OpenCage Geocoding API
          axios
            .get(
              `https://api.opencagedata.com/geocode/v1/json?key=a5c08425911348c0972837c565b2c2bc&q=${latitude}+${longitude}`
            )
            .then((response) => {
              // Extract city name from the API response
              const cityName = response.data.results[0].components.city;
              setCity(cityName);
            })
            .catch((error) => {
              console.error("Error fetching OpenCage Geocoding API:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div style={{ position: "fixed", width: "18vw", height: "100%",zIndex:'1' }}>
      {city ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3.5 }}
        >
          <Box
            borderRadius={"3px"}
            paddingRight={"1%"}
            paddingLeft={"2%"}
            bg={"black"}
            fontSize={{ base: "2xl", md: "2xl" }}
            fontWeight={900}
            fontFamily="Font2, roboto mono"
            marginLeft={2}
            marginTop={500}
            noOfLines={3}
            zIndex={1000}
            color={"grey"}
            
          >
            Thanks for visiting 
            from {city}
          </Box>
        </motion.div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SecondEmbed;
