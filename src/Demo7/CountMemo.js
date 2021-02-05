import React, { useState } from 'react'
import { showAlert } from '../index'
import { Button, Paragraph } from '../Common/Components'

const CountMemo = React.memo(({ data }) => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	showAlert("success", "Render Memo")


	return (
		<div>
			<Paragraph>With memo</Paragraph>
			<Button onClick={handleClick}>Count: {count}</Button>

			<Paragraph>
				{JSON.stringify(data)}
			</Paragraph>
		</div>
	)
}, isEquals)


const isEquals = (prevProps, nextProps) => {
	if (prevProps.data.currentLocation !== nextProps.data.currentLocation) 
		return false
	
	return true
}


export default CountMemo;