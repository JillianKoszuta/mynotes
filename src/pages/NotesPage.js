import React, { useState, useEffect } from 'react';
//import notes from '../assets/data';
import ListItem from '../components/ListItem';

const NotesPage = () => {
	let [notes, setNotes] = useState([]);

	const getNotes = async () => {
		let response = await fetch('http://127.0.0.1:5000/notes');
		let data = await response.json();
		setNotes(data);
	};

	useEffect(() => {
		getNotes();
	}, []);

	return (
		<div className='notes'>
			<div className='notes-header'>
				<h2 className='notes-title'>&#9782;Notes</h2>
				<p className='notes-count'>{notes.length}</p>
			</div>

			<div className='notes-list'>
				{notes.map((note, index) => (
					<ListItem
						note={note}
						key={note.id || index}
					/>
				))}
			</div>
		</div>
	);
};

export default NotesPage;
