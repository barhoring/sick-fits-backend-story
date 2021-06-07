import React from "react"
import { DiffEditorContainer } from "../../containers"

const Modified = ({ filesModified, hash, prevHash }) => {
  return (
    <>
      {filesModified &&
        filesModified.map((file) => {
          return (
            <DiffEditorContainer
              key={`${hash}:${file}`}
              {...{ hash, prevHash, fileName: file }}
            />
          )
        })}
    </>
  )
}

export default Modified
