import React, { useState, useEffect } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { file as fileUtils } from "../../utils";
import axios from "axios";
import { ThemeContext } from "../../ThemeContext";
import { Card, CardActions, CardContent } from "@material-ui/core/";
import { FileNameHeading, GithubLink } from "../../components";
import useStyles from "./useStyles";
import { monaco } from "@monaco-editor/react";
import monacoThemes from "monaco-themes/themes/themelist";

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      monaco.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

const DiffEditor = ({
  modifiedFilePath,
  originalFilePath,
  githubLink,
  fileName,
  renderSideBySide,
}) => {
  const [originalText, setOriginalText] = useState(null);
  const [modifiedText, setModifiedText] = useState(null);

  useEffect(() => {
    axios
      .all([axios.get(modifiedFilePath), axios.get(originalFilePath)])
      .then((values) => {
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
      });
  }, []);

  const { isDarkMode, theme } = React.useContext(ThemeContext);

  defineTheme(theme);

  const classes = useStyles();
  console.log("theme:", theme);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root} variant="outlined" square={true}>
        <CardContent>
          <p id={fileName}>
            <FileNameHeading link={githubLink} fileName={fileName} />
          </p>
          <div style={styles.root}>
            <MonacoDiffEditor
              height="100%"
              options={{ renderSideBySide }}
              theme={theme}
              // theme={isDarkMode ? "dark" : "light"}
              original={originalText || ""}
              modified={modifiedText || ""}
              // language={"markdown"}
              language={fileUtils.getLanguage(modifiedFilePath)}
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
