import React from 'react'
import styled from 'styled-components'

const ProfileData = styled.div`
	margin-left: 20px;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 600px) {
		height: auto;
		margin: 10px 0px 0px 0px;
		border-bottom: 3px solid #c3eaea;
	}
`

const ProfileTitle = styled.h2`
	color: hsl(180, 29%, 50%);
	margin-right: 20px;
	cursor: pointer;
	color: ${props => (props.black ? 'hsl(180, 14%, 20%)' : 'hsl(180,29%,50%)')};
	width: ${props => (props.full ? '100%' : '')};
	margin: ${props => (props.margin ? '10px 0' : '')};
	transition: all 0.4s ease-in-out;
	&:hover {
		color: hsl(180, 29%, 50%);
	}
`

const Profile = styled.div`
	display: flex;
	width: 500px;
	align-items: center;
	@media (max-width: 600px) {
		margin-top: -45px;
		width: auto;
	}
`

const TopBottom = styled.section`
	color: white;
	border-radius: 10px;
	margin-right: 10px;
	padding: 5px;
	height: 25px;
	font-weight: bold;
	background: ${props => (props.black ? 'black' : 'hsl(180, 29%, 50%)')};
`

const SpacePoint = styled.span`
	margin: 0px 10px;
`

const ProfileInfo = styled.p`
	color: gray;
	display: flex;
	@media (max-width: 600px) {
		margin-top: 10px;
		padding-bottom: 20px;
	}
`

export default function ProposalProfile({ proposal }) {
	return (
		<Profile>
			<ProfileData>
				<ProfileTitle as='h4'>{proposal.company}</ProfileTitle>
				{proposal.new ? <TopBottom>New</TopBottom> : ''}
				{proposal.featured ? <TopBottom black>Featured</TopBottom> : ''}
				<ProfileTitle full margin black>
					{proposal.position}
				</ProfileTitle>
				<ProfileInfo>
					{proposal.postedAt}
					<SpacePoint>∙</SpacePoint>
					{proposal.contract}
					<SpacePoint>∙</SpacePoint>
					{proposal.location}
				</ProfileInfo>
			</ProfileData>
		</Profile>
	)
}
