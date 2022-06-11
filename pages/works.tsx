import React from "react";

import Layout from "@/components/layout/Layout";
import { Portfolio } from "@/containers/portfolio";

const Works = () => {
	return (
		<Layout>
			<div className='b-primary py-2'></div>
			<div className='container'>
				<h4 className='my-3'>Works</h4>
				<Portfolio />
			</div>
		</Layout>
	);
};

export default Works;
