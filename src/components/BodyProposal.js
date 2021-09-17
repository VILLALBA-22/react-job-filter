import React from 'react'
import Proposal from './Proposal'
import styled from 'styled-components'
import SearchP from './SearchP'
const ProposalContainer = styled.div`
	padding: 40px 20px 100px 20px;
`

export default function BodyProposal({
	propolsalsJson,
	search,
	handlesAddItem,
	handleDelete,
}) {
	let proposalToRender = []
	const filteredProposals = proposals => {
		let tagsProposals = [
			proposals.role,
			proposals.level,
			...proposals.languages,
			...proposals.tools,
		]
		let comprobation = []
		search.forEach(req => comprobation.push(tagsProposals.includes(req)))
		return !comprobation.includes(false)
	}
	search.length > 0
		? (proposalToRender = propolsalsJson.filter(filteredProposals))
		: (proposalToRender = propolsalsJson)

	return (
		<ProposalContainer>
			<SearchP search={search} handleDelete={handleDelete} />
			{proposalToRender.map(element => (
				<Proposal proposal={element} key={element.id} handlesAddItem={handlesAddItem} />
			))}
		</ProposalContainer>
	)
}
