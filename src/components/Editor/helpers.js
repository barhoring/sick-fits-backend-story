import axios from "axios"

const fetchRawGithubFile = (filePath, setText, setFileType) => {
  axios
    .get(filePath)
    .then((response) => {
      // handle success
      if (typeof response.data === "object") {
        // A bug in axios returns an object even when config sets response type for text
        // This is why in the next line we turn the object into a string
        const stringObject = JSON.stringify(response.data, null, "\t")
        setText(stringObject)
      } else {
        setText(response.data)
      }
      setFileType(response?.headers?.["content-type"])
    })
    .catch((error) => {
      // handle error
      console.log("Error occured during axios request!")
      console.log(error)
    })
    .then(() => {
      // always executed
      console.log("End of axios request")
    })
}

export { fetchRawGithubFile }
