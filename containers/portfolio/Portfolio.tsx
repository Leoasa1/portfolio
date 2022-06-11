import React from "react";
import { PortfolioItem } from "./comps";

const portfolioItems = [
	{
		title: "DuckBoyz",
		image: "/images/duckboyz.png",
		description:
			"DUCK BOYZ is a collection of 10,000 randomly generated NFTs living on the Ethereum blockchain.",
		link: "https://duckboyz.com/",
	},
	{
		title: "Ladydis",
		image: "/images/ladydis.png",
		description: "mlob",
		link: "/",
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
