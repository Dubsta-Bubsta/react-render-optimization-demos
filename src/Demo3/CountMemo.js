import React, { useState } from 'react'
import { showAlert } from '../index'
import { Button, Paragraph } from '../Common/Components'


const CountMemo = React.memo(({ onValueEqualsFive }) => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		if (count === 5) {
			onValueEqualsFive()
		}
		setCount(count + 1)
	}

	showAlert("success", "Render Memo")


	return (
		<div>
			<Paragraph>With memo</Paragraph>
			<Button onClick={handleClick}>Count: {count}</Button>
		</div>
	)
})



export default CountMemo;