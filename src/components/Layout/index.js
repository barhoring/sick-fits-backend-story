import React from "react"
import { Header } from "../../components"
import { CommitViewContainer } from "../../containers"
import { Router } from "@reach/router"
import { SettingsPage, About } from "../../pages"
import { ThemeProvider } from "../../ThemeContext"

const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <CommitViewContainer path="/" />
        <CommitViewContainer path="/commits" />
        <CommitViewContainer path="/commits/:commit_hash" />
        <SettingsPage path="/settings/" />
        <About path="/about/" />
      </Router>
    </ThemeProvider>
  )
}

export default Layout
