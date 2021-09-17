import BodyProposal from './components/BodyProposal'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Loading from './components/Loading'

function App() {
	const [propolsalsJson, setPropolsalsJson] = useState(null)
	const [search, setSearch] = useState([])

	const handlesAddItem = e => {
		if (!search.includes(e.target.textContent))
			setSearch([...search, e.target.textContent])
	}

	const handleDelete = e => {
		if (e.target.dataset.all) {
			setSearch([])
		} else {
			setSearch(search.filter(tag => tag !== e.target.dataset.tag))
		}
	}

	useEffect(() => {
		fetch('./data/data.json', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => setPropolsalsJson(res))
	}, [])

	return (
		<>
			<Header />
			{propolsalsJson !== null ? (
				<BodyProposal
					propolsalsJson={propolsalsJson}
					handlesAddItem={handlesAddItem}
					search={search}
					handleDelete={handleDelete}
				/>
			) : (
				<Loading />
			)}
		</>
	)
}

export default App
