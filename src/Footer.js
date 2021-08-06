import React from "react";
import "./Footer.css";
import { Button } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: 152
  },
}));

function Footer() {

  const classes = useStyles();

  return (
    <>
      <div className="footer_arriba">
        <center>
          <Button
            variant="contained"
            color="primary"
            href="https://nicolasvenzmer.netlify.app/#intro"
            target="_blank"
            className={classes.button}
            startIcon={<WorkIcon />}
          >
            Portfolio
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/nicolas-alejandro-venzmer/"
            target="_blank"
            className={classes.button}
            startIcon={<LinkedInIcon />}
          >
            Linkedin
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/NicolasVenzmer"
            target="_blank"
            className={classes.button}
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </center>
      </div>
      <hr className="hr" />
      <center>
        <p className="p_Abajo">Copyright 2021 - All rights reserved</p>
      </center>
    </>
  );
}

export default Footer;
