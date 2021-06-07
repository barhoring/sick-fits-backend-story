import React from "react"
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useStyles from "./useStyles"

const FileAccordion = ({ files, title }) => {
  const classes = useStyles()

  return (
    <Accordion disabled={files.length === 0 ? true : false}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {files.length} {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {files.map((file, index) => {
            return (
              <div key={file} style={{ textAlign: "start" }}>
                <a href={`#${file}`}>{file}</a>
              </div>
            )
          })}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default FileAccordion
