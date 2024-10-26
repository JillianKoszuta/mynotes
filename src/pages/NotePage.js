import React, { useState, useEffect } from 'react';
//import notes from '../assets/data';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = () => {
	const noteId = useParams().id;
	//let note = notes.find((note) => note.id === Number(noteId)) || {};

	let [note, setNote] = useState(null);

	const getData = async () => {
		let response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`);
		let data = await response.json();
		setNote(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='note'>
			<div className='note-header'>
				<h3>
					<Link to='/'>
						<ArrowLeft></ArrowLeft>
					</Link>
				</h3>
			</div>

			<textarea value={note?.body}></textarea>
		</div>
	);
};

export default NotePage;
