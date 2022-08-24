import React from "react";
import { PortfolioItem } from "./comps";

const portfolioItems = [
	{
		title: 'DuckBoyz',
		image: '/images/duckboyz.png',
		description:
			'DUCK BOYZ is a collection of 10,000 randomly generated NFTs living on the Ethereum blockchain. The first generation is created from over 140 traits and over 800 million total possible variations. Each Duck Boy is comprised of a unique body, headwear, outfit, beak, eyes, skin color, hair color and background color.',
		link: 'https://duckboyz.com/',
	},
];

const Portfolio: React.FC = () => {
	return (
		<>
			{portfolioItems.map((item, index) => {
				return (
					<div
						key={`portfolio-item-${index}`}
						className={index > 0 ? "mt-5" : ""}
					>
						<PortfolioItem data={item} />
					</div>
				);
			})}
		</>
	);
};

export default Portfolio;
