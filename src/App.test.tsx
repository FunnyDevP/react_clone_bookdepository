import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("sample test", () => {
  it("should render title text", () => {
    render(<App />)
    expect(screen.getByText("Clone Book Depository")).toBeInTheDocument()
  })
})
