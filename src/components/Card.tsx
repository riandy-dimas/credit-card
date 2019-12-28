import React from 'react';
import AppContext from '../context/AppContext';
import DisplayExpiryDate from './DisplayExpiryDate';
import styled from 'styled-components';
import CardNumber from './CardNumber';
import image from '../assets/chip2.png';

const CardBody = styled.div`
	margin: 0 auto 20px;
	width: 400px;
	height: 225px;
	border-radius: 10px;
	padding: 10px 20px;
	background-color: gray;
	box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 3fr 1fr;
`;

const Chip = styled.div`
	background-image: url(${image});
	width: 40px;
	height: 40px;
	grid-column: 1/ 2;
	grid-row: 1 / 2;
`;

const DisplayedName = styled.div`
	text-transform: uppercase;
	grid-column: 1 / 2;
	grid-row: 3 / -1;
	justify-self: start;
	align-self: center;
`;

const Card: React.FC = () => {
	const { displayedCardNumber, displayedName, month, year } = React.useContext(
		AppContext
	);
	return (
		<CardBody>
			<Chip />
			<CardNumber cardNumber={displayedCardNumber} />
			<DisplayedName>
				<p>{displayedName}</p>
			</DisplayedName>
			<DisplayExpiryDate month={month} year={year} />
		</CardBody>
	);
};

export default Card;
