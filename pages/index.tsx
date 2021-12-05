import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import Links from 'next/link';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import {
    fa500px,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Layout from '@/components/layout/Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="maintext align-middle square mt-1">
                <div className="p-2 text-center">
                    <div className="d-flex justify-content-center col-auto align-self-center">
                        <object
                            className="mb-5 computer-logo col-md-6 col-7"
                            type="image/svg+xml"
                            data="/images/RetroPC-3.svg"
                        />
                    </div>
                    <h3 className="fw-bold head1 mx-auto px-0 font-monospace">
                        Hello, my name is Leo and I'm a web developer!
                    </h3>
                    <h5 className="font-robo subTitle">
                        Welcome to my portfolio website!
                    </h5>
                    <div className="d-flex justify-content-center">
                        <div className="row col col-md-6 mt-4 font-robo px-4">
                            <div className="d-grid col col-md-6 py-2 buttons">
                                <Links href="/contact">
                                    <Button
                                        className="btn-light"
                                        variant="dark"
                                    >
                                        Contact
                                    </Button>
                                </Links>
                            </div>
                            <div className="d-grid col col-md-6 py-2 buttons">
                                <Links href="/works">
                                    <Button variant="light">Projects</Button>
                                </Links>
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <h5 className="fw-lighter font-robo arrow">My bio!</h5>
                        <button className="arrowdown arrow ">
                            <Link
                                to="bio"
                                spy={true}
                                smooth={true}
                                duration={300}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowCircleDown}
                                    size="2x"
                                    color="black"
                                />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {/*Bio paragraph and social links*/}
            <div className="container px-4">
                <div id="bio" className="d-flex align-items-center my-5">
                    <div
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '100%',
                            overflow: 'hidden',
                            border: '2px solid black',
                            marginRight: '5px',
                        }}
                        className="col col-md-2 col-2"
                    >
                        <Image
                            className="profile"
                            src="/images/profile.jpg"
                            layout="intrinsic"
                            width="120"
                            height="120"
                        />
                    </div>
                    <div className="profileName">
                        <h1 className="fw-bold mt-0 mb-0">Leo Asadourian</h1>
                        <h5>Web Creator (Photographer, Artist, Developer)</h5>
                    </div>
                </div>
                <div className="fs-5 font-robo">
                    <p className="mb-4">
                        Leo is a full-time Undergraduate student at California
                        University of Northridge, majoring in Computer Science.
                        He is also a frontend web developer that enjoys helping
                        the community by building websites and solving real-life
                        problems with coding. Whether it's an academic,
                        extracurricular, or professional project, Leo wants to
                        apply proven problem-solving, research, and technical
                        skills to any type of job he will do in his lifetime.
                    </p>
                    <h3 className="text-decoration-underline fw-bold">Bio</h3>
                    <div className="row">
                        <p className="col-auto fw-bold">2017</p>
                        <p className="col ">Worked at Bestbuy as Salesman</p>
                    </div>
                    <div className="row">
                        <p className="col-auto fw-bold">2020</p>
                        <p className="col">
                            Started Undergraduate degree at CSUN
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-auto fw-bold">2021-present</p>
                        <p className="col">
                            full-time Student / Works as a freelance
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <h3 className="text-decoration-underline mt-4 fw-bold">
                        Social Media
                    </h3>
                    <div className="row">
                        <a
                            className="btn btn-primary-link col-6 col-md-3 border-0"
                            href="https://www.instagram.com/leo_asadourian/"
                        >
                            <div className="row text-start">
                                <div className="col-2">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="lg"
                                    />
                                </div>
                                <div className="col col-md-1">
                                    @leo_asadourian
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="row">
                        <a
                            className="btn btn-primary-link col-6 col-md-3 border-0"
                            href="https://github.com/Leoasa1"
                        >
                            <div className="row text-start">
                                <div className="col-2">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        size="lg"
                                    />
                                </div>
                                <div className="col col-md-1">@leoasa1</div>
                            </div>
                        </a>
                    </div>
                    <div className="row">
                        <a
                            className="btn btn-primary-link col-6 col-md-3 border-0"
                            href="https://500px.com/p/leoasa84"
                        >
                            <div className="row text-start">
                                <div className="col-2">
                                    <FontAwesomeIcon icon={fa500px} size="lg" />
                                </div>
                                <div className="col col-md-1">@leo_asa84</div>
                            </div>
                        </a>
                    </div>
                    <div className="socialMedia row mt-4">
                        <a
                            className="col-12 col-md-6 text-center img-link p-4"
                            href="https://youtube.com/channel/UCLo3wIEshlIzCkQW7lK6ROA"
                        >
                            <div className="socialImg">
                                <Image
                                    className="rounded border border-dark border-3"
                                    src="/images/Youtube-TN.jpg"
                                    layout="responsive"
                                    width="450"
                                    height="250"
                                />
                            </div>
                            <h5 className="mt-2 ">Aerial Cinematography</h5>
                            <p className="fs-6">(My Youtube Channel)</p>
                        </a>
                        <a
                            className="col-12 col-md-6 text-center img-link p-4"
                            href="https://www.linkedin.com/in/leo-asadourian-667a63178/"
                        >
                            <div className="socialImg">
                                <Image
                                    className="rounded border border-dark border-3"
                                    src="/images/linkedin.png"
                                    layout="responsive"
                                    width="450"
                                    height="250"
                                />
                            </div>
                            <h5 className="mt-2">Linkedin</h5>
                            <p className="fs-6">(My Professional Identity)</p>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
