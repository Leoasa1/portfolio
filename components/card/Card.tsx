import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import Style from "./card.module.scss";

export interface Props {
	title: string;
	image: string;
	description: string;
	link: string;
	onHide: any;
	show: any;
}

export default function CardShow({ title, image, description, link, onHide, show }: Props) {
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
				<button className={`btn ${Style.primary}`} onClick={onHide}>
					Close
				</button>
			</Modal.Footer>
		</Modal>
	);
}
