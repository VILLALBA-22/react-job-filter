import React from 'react'
import styled from 'styled-components'

const LoadingC = styled.div`
	width: 100%;
	padding-top: 60px;
	display: flex;
	justify-content: center;
`

export default function Loading() {
	return (
		<LoadingC>
			<img src='./images/Rolling-1s-200px.gif' alt='Icono de carga' />
		</LoadingC>
	)
}
