import { connect } from "react-redux"
import { CommitInfo } from "../components"
import { file as fileUtils } from "../utils"

const mapStateToProps = (state, ownProps) => {
  const { hash } = ownProps
  const data = state.commits.commits[hash]
  if (!data) {
    console.log("hash", hash)
  }
  const commitGithubLink = fileUtils.getGithubCommitLink(hash)
  return {
    hash,
    commitGithubLink,
    authorName: data.authorName,
    filesAdded: data.filesAdded,
    filesModify: data.filesModify,
    filesDeleted: data.filesDeleted,
    filesRenamed: data.filesRenamed,
  }
}

export default connect(mapStateToProps)(CommitInfo)
