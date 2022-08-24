import "../styles/landing.scss";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.scss";

import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export default MyApp;
