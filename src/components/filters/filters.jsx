import React, { useState } from 'react';
import classNames from 'classnames';

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './filters.scss';

const Filters = () => {
	const [rating, setRating] = useState(6);
	const [releaseYear, setReleaseYear] = useState({ min: 1988, max: 2016 });
	const [click, setClick] = useState(false);

	const onChangeRating = (rating) => {
		setRating(rating);
	};

	const onChangeReleaseYear = (releaseYear) => {
		setReleaseYear(releaseYear);
	};

	const onClickItem = () => {
		setClick((prevValue) => !prevValue);
	};

	const array = [1988, 2016];

	return (
		<div className='filters'>
			<h2 className='filters__title'>Movies</h2>

			<h4 className='filters__list-title title'>genres</h4>

			<div className='filters__list-genres'>
				<ul className='filters__list-genres-name'>
					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						action
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						adventure
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						animation
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>

					<li
						className={classNames('filters__list-item', {
							selected: click,
						})}
						onClick={onClickItem}
					>
						biography
						{click ? (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
							</svg>
						) : (
							<svg
								className='filters__list-item-icon'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='white'
								width='18px'
								height='18px'
							>
								<path d='M0 0h24v24H0z' fill='none' />
								<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
							</svg>
						)}
					</li>
				</ul>
			</div>

			<h4 className='filters__rating-title title'>rating</h4>

			<div className='filters__rating'>
				<div className='filters__release-year-count'>{rating}</div>

				<InputRange
					maxValue={10}
					minValue={0}
					value={rating}
					onChange={onChangeRating}
				/>
			</div>

			<h4 className='filters__release-year-title title'>release year</h4>

			<div className='filters__release-year'>
				<InputRange
					maxValue={array[1]}
					minValue={array[0]}
					value={releaseYear}
					onChange={onChangeReleaseYear}
				/>
			</div>
		</div>
	);
};

export default Filters;
