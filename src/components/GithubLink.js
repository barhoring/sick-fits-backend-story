import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";

const GithubLink = ({ commitGithubLink }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   border: "2px solid",
        }}
      >
        <Button
          size="small"
          target="_blank"
          rel="noopener noreferrer"
          href={commitGithubLink}
          title="view this commit on github"
        >
          {/* </Button> */}{" "}
          <GitHubIcon
            style={{ fontSize: "2rem", marginRight: "1rem" }}
            color="primary"
          />
          View on Github
          {/* <Button size="small">View on Github */}
        </Button>
      </div>
    </>
  );
};

export default GithubLink;
