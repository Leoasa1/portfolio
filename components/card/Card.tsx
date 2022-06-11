import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import Style from "./card.module.scss";

export interface Props {
	title: string;
	image: string;
	description: string;
	onHide: any;
	show: any;
}

export default function CardShow({
	title,
	image,
	description,
	onHide,
	show,
}: Props) {
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
				<Image
					src={image}
					layout='responsive'
					width='400'
					height='200'
					alt=''
				/>
				<p>{description}</p>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo
					odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
					risus, porta ac consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<button className={`btn ${Style.primary}`} onClick={onHide}>
					Close
				</button>
			</Modal.Footer>
		</Modal>
	);
}
