import React, { useState } from "react"
import Count from "./Count"
import { Input, Container } from "../Common/Components"

const App = () => {
    const [text, setText] = useState("")

    return (
        <Container>
            <Input 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />

            <Count />
        </Container>
    )
}


export default App;
