import React from "react"
import { CommitContainer, CommitSelectorContainer } from "../../containers"
import { Chapter } from "../../components"
import { chapter_base_uri as filePath } from "../../meta-data/repoSettings.json"
import { navigate } from "@reach/router"

const firstHash = "a6d5b6824251cded54b2ab5c8065545d6fc2476e"

const CommitView = ({ hash, prevHash, nextHash }) => {
  if (!hash) {
    navigate(`/commits/${firstHash}`, { state: { name: "bar" } }, { replace: true })
    hash = firstHash
  }

  const selectorProps = { prevHash, nextHash, hash }
  const commitProps = { hash, prevHash }
  return (
    <div style={{ marginTop: "5rem" }}>
      {" "}
      <CommitSelectorContainer {...selectorProps} />
      {filePath && <Chapter hash={hash} />}
      <CommitContainer {...commitProps} />
    </div>
  )
}

export default CommitView
