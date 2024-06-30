import styles from "./Footer.module.css"
import logo from "./logo.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function PieDePagina() {
    return (
        <footer className={styles.footerContainer}>
            <img src={logo} alt="Logo de la empresa" className={styles.logo} />

            <div className={styles.links}>
                <li>
                    <a href="https://www.linkedin.com/in/karina-monge-rojas/" target="_blank">
                        <FaLinkedin className={styles.icons} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/karina105" target="_blank">
                        <FaGithub className={styles.icons} />
                    </a>
                </li>
            </div>
            <div className={styles.textContainer}>
                <p>Desarrollado por Karina Monge</p>
                <p>2024</p>
            </div>

        </footer>
    )

}

export default PieDePagina