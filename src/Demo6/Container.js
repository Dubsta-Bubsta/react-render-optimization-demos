import React, { useState, useCallback, useMemo } from "react"
import CountMemo from "./CountMemo"
import { Input, Container } from "../Common/Components"
import { useHistory } from "react-router"

const App = () => {
    const history = useHistory()

    const [text, setText] = useState("")
    const [text2, setText2] = useState("")

    const data = useMemo(
        () => ({
            currentLocation: history.location.pathname,
            cumputed: text2          
        }), 
        [text2]
    )
    return (
        <Container>
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Input
                value={text2}
                onChange={(e) => setText2(e.target.value)}
            />
            <CountMemo data={data} />
        </Container>
    )
}


export default App;
