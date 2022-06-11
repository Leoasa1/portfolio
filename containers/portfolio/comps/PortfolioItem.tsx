import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardModal from "@/components/card/Card";
import classnames from "classnames";
import Style from "./item.module.scss";
import Image from "next/image";

interface PropTypes {
	data: {
		title: string;
		image: string;
		description: string;
	};
}

const PortfolioItem: React.FC<PropTypes> = ({ data }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div
				className={classnames(Style.worksCard)}
				onClick={() => setOpen(true)}
			>
				<div
					className={classnames("overflow-hidden", Style.worksImage)}
				>
					<Image
						src={data.image}
						layout='responsive'
						width='400'
						height='200'
						alt=''
					/>
				</div>
				<div className='font-robo text-center mt-4 fs-4'>
					{data.title}
				</div>
			</div>
			<CardModal
				title={data.title}
				image={data.image}
				description={data.description}
				show={open}
				onHide={() => setOpen(false)}
			/>
		</>
	);
};

export default PortfolioItem;
