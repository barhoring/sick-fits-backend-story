import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { monaco } from "@monaco-editor/react";
import ThemeList from "./ThemeList";
import monacoThemes from "monaco-themes/themes/themelist";

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      monaco.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      debugger;
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Secular One",
    color: "inherit",
  },
  root: {
    // border: "1px solid",
    display: "flex",
    flexDirection: "column",
    // flexGrow: 1,
    // marginTop: theme.spacing(5),
  },
}));

const Settings = ({ settings, addTheme, setTheme }) => {
  const theme = "espresso-libre";
  console.log("settings", settings);
  const classes = useStyles();
  return (
    <div>
      <div>{JSON.stringify(monacoThemes)}</div>
      <div>{JSON.stringify(settings)}</div>
      <ThemeList />
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          Settings
        </Typography>
        <Button
          onClick={() =>
            defineTheme(theme).then(addTheme(theme)).then(setTheme(theme))
          }
        >
          espresso libre
        </Button>
      </div>
    </div>
  );
};

export default Settings;
