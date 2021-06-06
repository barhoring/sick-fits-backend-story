import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { fetchRawGithubFile } from "../../utils";

const filePath = `https://raw.githubusercontent.com/barhoring/gitty-markdown/master`;

const markdown =
  "#fucjk]\n```js var React = require('react');\n var Markdown = require('react-markdown');\n```";
const Chapter = ({ hash }) => {
  const [text, setText] = useState("");
  fetchRawGithubFile(`${filePath}/${hash}.md`, setText);
  return (
    <div
      style={{
        flexGrow: 1,
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
      }}
    >
      <ReactMarkdown source={text} />
    </div>
  );
};

export default Chapter;
