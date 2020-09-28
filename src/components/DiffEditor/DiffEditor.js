import React, { useState, useEffect } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { file as fileUtils } from "../../utils";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";
import { Card, CardActions, CardContent } from "@material-ui/core/";
import { FileNameHeading, GithubLink } from "../../components";
import useStyles from "./useStyles";

const DiffEditor = ({
  modifiedFilePath,
  originalFilePath,
  original,
  modified,
  githubLink,
  fileName,
}) => {
  const [originalText, setOriginalText] = useState(null);
  const [modifiedText, setModifiedText] = useState(null);

  useEffect(() => {
    axios
      .all([axios.get(modifiedFilePath), axios.get(originalFilePath)])
      .then((values) => {
        debugger;
        if (typeof values[0].data == "object") {
          setModifiedText(fileUtils.objectToString(values[0].data));
        } else {
          setModifiedText(values[0].data);
        }

        if (typeof values[1].data == "object") {
          setOriginalText(fileUtils.objectToString(values[1].data));
        } else {
          setOriginalText(values[1].data);
        }
        debugger;
      });
  }, []);

  const { isDarkMode } = React.useContext(ThemeContext);

  const classes = useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <FileNameHeading link={githubLink} fileName={fileName} />
          <div style={styles.root}>
            <MonacoDiffEditor
              options={{ renderSideBySide: false }}
              theme={isDarkMode ? "dark" : "light"}
              original={originalText || ""}
              modified={modifiedText || ""}
              language={"markdown"}
            />
          </div>
        </CardContent>
        <CardActions>
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
  root2: {
    width: "100%",
    height: "70%",
    display: "flex",
    marginTop: 20,
    marginBottom: 20,
  },
};

export default DiffEditor;
