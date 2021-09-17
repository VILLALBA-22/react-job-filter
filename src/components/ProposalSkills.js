import React from 'react'
import styled from 'styled-components'

const Skill = styled.section`
	color: hsl(180, 29%, 50%);
	margin: 0 10px 10px 0;
	background: hsl(180, 31%, 95%);
	padding: 10px 10px;
	border-radius: 5px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	user-select: none;
	&:hover {
		color: white;
		background: hsl(180, 29%, 50%);
	}
`

const SkillsData = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	width: 45%;
	justify-content: end;
	@media (max-width: 600px) {
		margin-top: 20px;
		justify-content: start;

		width: 95%;
	}
`

export default function ProposalSkills({ proposal, handlesAddItem }) {
	let skillsData = [
		proposal.role,
		proposal.level,
		...proposal.tools,
		...proposal.languages,
	]
	return (
		<SkillsData>
			{skillsData.map(skill => {
				return (
					<Skill onClick={handlesAddItem} key={`key${skill}${proposal.id}`}>
						{skill}
					</Skill>
				)
			})}
		</SkillsData>
	)
}
