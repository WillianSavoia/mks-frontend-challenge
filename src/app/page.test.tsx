import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import test, { describe } from "node:test"

import Page from './page'

describe("Page", () => {
    test("App está renderizando?", () => {
        const { debug } = render(<Page />)
        debug()
    })
})