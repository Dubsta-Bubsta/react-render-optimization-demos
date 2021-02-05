import React, { useState, useCallback, useMemo } from "react"
import CountMemo from "./CountMemo"
import { Input, Container } from "../Common/Components"
import { useHistory } from "react-router"

const App = () => {
    const history = useHistory()

    const [text, setText] = useState("")

    const data = {
        currentLocation: history.location.pathname
    }
    return (
        <Container>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <CountMemo data={data} />
        </Container>
    )
}


export default App;
