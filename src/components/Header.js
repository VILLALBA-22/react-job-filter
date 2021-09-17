import React from 'react'
import styled from 'styled-components'

const HeaderTop = styled.div`
	background-image: url('./images/bg-header-desktop.svg');
	height: 156px;
	padding: 0 20px;
	background-color: hsl(180, 29%, 50%);
`

const Header = () => {
	return <HeaderTop />
}

export default Header
