import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import monacoThemes from "monaco-themes/themes/themelist";
import { monaco } from "@monaco-editor/react";

import { TextField, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { addTheme, setTheme } from "../../actions/settings-actions";

const mapStateToProps = (state) => {
  const settings = state.settings;
  return {
    settings,
  };
};

const mapDispatchToProps = { addTheme, setTheme };

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      monaco.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      debugger;
      res();
    });
  });
};

export const ThemeSelect = ({ settings, addTheme, setTheme }) => {
  const classes = useStyles();
  console.log(settings);

  const handleChange = (event) => {
    console.log(event.target.event);
    // setCurrency(event.target.value);
  };

  const allMonacoThemes = {
    ...{ light: "Light", dark: "Dark" },
    ...monacoThemes,
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-theme"
          select
          label="theme"
          value={settings.theme}
          onChange={handleChange}
          helperText="select theme"
          variant="outlined"
        >
          {Object.keys(allMonacoThemes).map((theme) => {
            const themeName = allMonacoThemes[theme];
            return (
              <MenuItem
                key={theme}
                value={theme}
                onClick={() => {
                  defineTheme(theme)
                    .then(() => addTheme(theme))
                    .then(() => setTheme(theme));
                }}
              >
                {themeName}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelect);
