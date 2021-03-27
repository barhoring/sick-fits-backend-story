// This code is more readable with if than switch IMO

import repoSettings from "../repoSettings.json";


const { repoName, uri_format, githubCommitLink } = repoSettings;

const getLanguage = (file) => {
  const ext = getExt(file);
  if (ext === "js") return "javascript";
  if (ext === "json") return "json";
  if (ext === "html") return "html";
  if (ext === "css") return "css";
  if (ext === "md") return "markdown";
  return "text";
};

const getExt = (file) => {
  const index = file.lastIndexOf(".");
  const ext = file.substring(index + 1, file.length);
  return ext;
};

const getFileName = (file) => {
  const index = file.lastIndexOf("/");
  const name = file.substring(index + 1, file.length);
  return name;
};

// const uri_format = `https://raw.githubusercontent.com/barhoring`;
// TODO change repo name to new repo
// const repoName = "reach-router";
// const repoName = "sick-fits-frontend";
const getFileUri = (hash, fileName) => {
  const uri = `${uri_format}/${repoName}/${hash}/${fileName}`;
  return uri;
};

// const githubCommitLink = `https://github.com/barhoring/sick-fits-frontend/blob/`;
const getGithubCommitLink = (hash, fileName) => {
  return `${githubCommitLink}/${hash}/${fileName}`;
};

const objectToString = (obj) => {
  return JSON.stringify(obj, null, "\t");
};

export default {
  getLanguage,
  getExt,
  getFileName,
  getFileUri,
  objectToString,
  getGithubCommitLink,
};
