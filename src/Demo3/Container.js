import React, { useState, useCallback } from "react"
import CountMemo from "./CountMemo"
import { Input, Container } from "../Common/Components"

const App = () => {
    const [text, setText] = useState("")

    const onValueEqualsFive = () => {
        setText('')
    }

    return (
        <Container>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <CountMemo onValueEqualsFive={onValueEqualsFive} />
        </Container>
    )
}


export default App;
