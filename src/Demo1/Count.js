import React, { useState } from 'react'
import { showAlert } from '../index'
import { Button, Paragraph } from '../Common/Components'

const Count = ({ }) => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	showAlert("error", "Render Default")

	return (
		<div>
			<Paragraph>Default</Paragraph>
			<Button onClick={handleClick}>Count: {count}</Button>
		</div>
	)
}


export default Count;