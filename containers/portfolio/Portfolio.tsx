import React from "react";
import { PortfolioItem } from "./comps";

const portfolioItems = [
	{
		title: "DuckBoyz",
		image: "/images/duckboyz.png",
		description: "blob",
	},
	{
		title: "test 2",
		image: "/images/linkedin.png",
		description: "mlob",
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
