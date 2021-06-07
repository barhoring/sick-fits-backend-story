import React, { useEffect, useState, useContext } from "react";
import MonacoEditor from "@monaco-editor/react";
import { file as fileUtils } from "../../utils";
import { ThemeContext } from "../../ThemeContext";
import { Card, CardActions, CardContent } from "@material-ui/core/";
import useStyles from "./useStyles";
import { FileNameHeading, GithubLink } from "../../components";
import { fetchRawGithubFile } from "./helpers";

const Editor = ({ filePath, fileName, githubLink }) => {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState(null);
  const [fileType, setFileType] = useState("");
  // fetch the file from raw github

  useEffect(() => {
    fetchRawGithubFile(filePath, setText, setFileType);
  }, [filePath]);

  const isImage  = fileType?.includes("image");
  const isText = fileType?.includes("text");
  return (
    <div className={classes.container}>
      <Card className={classes.root} variant="outlined" square={true}>
        <CardContent>
          {/* id is for an in-page anchor sent from the accordion */}
          <p id={fileName}>
            <FileNameHeading {...{ link: githubLink, fileName }} />
          </p>
          {isText && 
            <div>
            <div className={classes.editor}>
              <MonacoEditor
                value={text || ""}
                theme={theme}
                language={fileUtils.getLanguage(filePath)}
              />
            </div>
          </div>
          }
          {isImage && <img src={filePath} alt={fileName} />}
          {!isImage && !isText && <p>file type <i>{fileType}</i> is not supported</p>}
        </CardContent>
        <CardActions>
          <GithubLink commitGithubLink={githubLink} />
        </CardActions>
      </Card>
    </div>
  );
};

export default Editor;
