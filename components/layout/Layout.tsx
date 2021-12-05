import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

export interface Props {
    title: string;
    description: string;
    children: React.ReactNode;
}

export default function Layout({ title, description, children }: Props) {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="container">
                <Navbar />
            </div>
            {children}
            {router.pathname === '/' && <Footer />}
        </div>
    );
}

Layout.defaultProps = {
    title: 'Leo Asadourian | Portfolio',
    description: 'Get to know Leo Asadourian',
};
