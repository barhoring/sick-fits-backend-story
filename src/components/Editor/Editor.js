import React, { useEffect, useState, useContext } from "react";
import MonacoEditor from "@monaco-editor/react";
import axios from "axios";
import { file as fileUtils } from "../../utils";
import { ThemeContext } from "../../ThemeContext";
import { Card, CardActions, CardContent, Button } from "@material-ui/core/";
import useStyles from "./useStyles";
import { FileNameHeading, GithubLink } from "../../components";

const Editor = ({ filePath, fileName, githubLink }) => {
  const classes = useStyles();
  const { isDarkMode } = useContext(ThemeContext);
  const [text, setText] = useState(null);
  // fetch the file from raw github

  const config = {
    headers: {
      "Content-Length": 0,
      "Content-Type": "text/plain",
    },
    responseType: "text",
  };

  useEffect(() => {
    axios
      .get(filePath, config)
      .then(function (response) {
        // handle success
        if (typeof response.data == "object") {
          // A bug in axios returns an object even when config sets response type for text
          // This is why in the next line we turn the object into a string
          const stringObject = JSON.stringify(response.data, null, "\t");
          setText(stringObject);
        } else {
          setText(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error occured during axios request!");
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("End of axios request");
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <FileNameHeading link={githubLink} fileName={fileName} />
          <div style={styles.root}>
            <MonacoEditor
              // style={styles.editor}
              value={text || ""}
              theme={isDarkMode ? "dark" : "light"}
              language={fileUtils.getLanguage(filePath)}
            />
          </div>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
          <GithubLink commitGithubLink={githubLink} />
        </CardActions>
      </Card>
    </div>
  );
};

const styles = {
  root: {
    width: "100wh",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 20 0 20",
  },
};

export default Editor;
