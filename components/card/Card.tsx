import React from 'react';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import Style from './card.module.scss';

export interface PropTypes {
	title: string;
	image: string;
	description: string;
	link: string;
	onHide: any;
	show: any;
}

const CardShow: React.FC<PropTypes> = ({
	title,
	image,
	description,
	link,
	onHide,
	show,
}) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			keyboard={true}
			backdropClassName={Style.bgPrimary}
		>
			<Modal.Header closeButton={true}>
				<Modal.Title
					id='contained-modal-title-vcenter'
					className='font-pacifico fs-2'
				>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<a href={link} target='_blank' rel='noreferrer'>
					<Image
						src={image}
						layout='responsive'
						width='400'
						height='200'
						alt=''
					/>
				</a>
				<div className='d-grid gap-3 mt-4'>
					<p>{description}</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button
					className={`btn ${Style.bgPrimary} text-white px-4 mx-3`}
					onClick={onHide}
				>
					Close
				</button>
				<a className={`btn ${Style.primary} px-4`} href={link}>
					Visit
				</a>
			</Modal.Footer>
		</Modal>
	);
};

export default CardShow;
