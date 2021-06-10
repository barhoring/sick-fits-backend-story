import React from "react"
import { Button } from "@material-ui/core/"
const CommitNavButton = ({ onClick, disabled, children }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      // color="primary"
      color="default"
      variant="contained"
      style={{ height: "4rem" }}
    >
      {children}
    </Button>
  )
}

export default CommitNavButton
