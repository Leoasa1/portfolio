import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    fa500px,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function footer() {
    return (
        <footer>
            <div className="container mt-5">
                <div className="d-flex justify-content-center mb-2">
                    <div className="row text-center col col-md-2">
                        <a
                            href="https://github.com/Leoasa1"
                            className="row justify-content-center col"
                        >
                            <div className="col">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/leo_asadourian/"
                            className="row justify-content-center col"
                        >
                            <div className="col">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </div>
                        </a>
                        <a
                            href="https://500px.com/p/leoasa84"
                            className="row justify-content-center col"
                        >
                            <div className="col">
                                <FontAwesomeIcon icon={fa500px} size="lg" />
                            </div>
                        </a>
                        <a href="#"></a>
                    </div>
                </div>
                <div className="col text-center">
                    <p>Copyright © 2020, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
