import React from 'react';

import './search.scss';

const Search = () => {
	return (
		<div className='search'>
			<label className='search__label' htmlFor='search'>
				<span className='material-icons search__icon'>search</span>

				<input
					className='search__input'
					type='text'
					placeholder='Search movies'
					name='search'
				/>
			</label>
		</div>
	);
};

export default Search;
