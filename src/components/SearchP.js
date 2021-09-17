import React from 'react'
import styled from 'styled-components'

const BannerSearch = styled.div`
	max-width: 1100px;
	padding: 20px 50px;
	background-color: white;
	position: relative;
	top: -82px;
	margin: auto;
	border-radius: 5px;
	box-shadow: 0px 5px 19px 0px hsl(180deg 29% 50% / 55%);
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: -65px;
`

const SkillTop = styled.section`
	color: hsl(180, 29%, 50%);
	margin-left: 10px;
	background: hsl(180, 31%, 95%);
	padding: 10px 10px;
	border-radius: 5px 0px 0px 5px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	&:hover {
		color: white;
		background: hsl(180, 29%, 50%);
	}
`
const SkillDelete = styled.section`
	background: hsl(180, 29%, 50%);
	padding: 10px 10px;
	border-radius: 0px 5px 5px 0px;
	transition: all 0.3s ease-in-out;
	color: white;
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	&:hover {
		background: black;
	}
`

const ClearClick = styled.span`
	color: hsl(180, 29%, 50%);
	justify-self: end;
	cursor: pointer;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`

const ContainerTag = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 80%;
`

const SkillTopContainer = styled.div`
	display: flex;
	margin-bottom: 7px;
`

export default function SearchP({ search, handleDelete }) {
	return search.length > 0 ? (
		<BannerSearch>
			<ContainerTag>
				{search.map(tag => (
					<SkillTopContainer key={tag}>
						<SkillTop>{tag}</SkillTop>
						<SkillDelete data-tag={tag} onClick={handleDelete}>
							<i data-tag={tag} className='fas fa-times'></i>
						</SkillDelete>
					</SkillTopContainer>
				))}
			</ContainerTag>
			<div>
				<ClearClick onClick={handleDelete} data-all={true}>
					Clear
				</ClearClick>
			</div>
		</BannerSearch>
	) : (
		''
	)
}
