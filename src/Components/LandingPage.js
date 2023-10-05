import React from "react";
import bg_image from "../assets/bg_image1.png";
import styles from "../styles/landingPage.module.scss";
import MuiButton from "../reuseableComp/Button";
import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
function LandingPage() {
  const matches = useMediaQuery("(min-width:200px) and (max-width:500px");

  return (
    <div className={styles.landing_page}>
      <img src={bg_image} className={styles.landing_page_image} alt="" />
      <Box component="h2" className={styles.landing_page_text}>
        Well Come to Our Tour!
      </Box>
      <div className={styles.landing_page_button}>
        <MuiButton
          size={matches ? "small" : "medium"}
          variantText="outlined"
          label="SpaceX"
        />
        <Link to="/dashboard">
          <MuiButton
            size={matches ? "small" : "medium"}
            variantText="outlined"
            label="SpaceX launches"
            onClick={() => console.log("click")}
          />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
