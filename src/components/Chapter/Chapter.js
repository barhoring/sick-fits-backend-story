import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { fetchRawGithubFile } from "../../utils";

const filePath = `https://raw.githubusercontent.com/barhoring/gitty-markdown/master`;

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

const Chapter = ({ hash }) => {
  const [text, setText] = useState("");
  fetchRawGithubFile(`${filePath}/${hash}.md`, setText);
  return <MarkdownPreview source={text} />;
};

export default Chapter;
