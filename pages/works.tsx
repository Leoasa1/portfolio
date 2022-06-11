import React from "react";
import Style from "../styles/works.module.scss";
import Layout from "@/components/layout/Layout";
import { Portfolio } from "@/containers/portfolio";
import classnames from "classnames";

const Works = () => {
	return (
		<Layout>
			<div className='b-primary py-1'></div>
			<div className='container'>
				<h4 className='my-4'>Works</h4>
				<Portfolio />
			</div>
		</Layout>
	);
};

export default Works;
