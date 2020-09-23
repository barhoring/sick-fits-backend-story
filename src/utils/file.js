// This code is more readable with if than switch IMO
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

const uri_format = `https://raw.githubusercontent.com/barhoring/Redux-course`;
const getFileUri = (hash, fileName) => {
  return `${uri_format}/${hash}/${fileName}`;
};

export default { getLanguage, getExt, getFileName, getFileUri };
