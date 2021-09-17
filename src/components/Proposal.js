import React from 'react'
import styled from 'styled-components'
import ProposalProfile from './ProposalProfile'
import ProposalSkills from './ProposalSkills'

const ProposalI = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	margin-top: 20px;
	background: white;
	max-width: 1100px;
	padding: 30px;
	border-radius: 5px;
	box-shadow: 0px 5px 19px 0px hsl(180deg 29% 50% / 55%);
	border-left: 5px solid ${props => (props.featured ? 'hsl(180, 29%, 50%)' : 'white')};
	@media (max-width: 600px) {
		flex-direction: column;
		margin-top: 40px;
		padding: 30px 25px;
	}
`

const ProfileImg = styled.img`
	width: 80px;
	height: 80px;
	transition: all 0.4 ease-in-out;
	@media (max-width: 600px) {
		position: relative;
		top: -50px;
		left: -37%;
		width: 50px;
		height: 50px;
	}
`

export default function Proposal({ proposal, handlesAddItem }) {
	return (
		<ProposalI featured={proposal.featured}>
			<ProfileImg src={proposal.logo} />
			<ProposalProfile proposal={proposal} />
			<ProposalSkills proposal={proposal} handlesAddItem={handlesAddItem} />
		</ProposalI>
	)
}
