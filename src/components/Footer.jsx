import styles from '../assets/Footer.module.css';

const copy = {
    text: "© 2021 Bakslash Inc. All rights reserved.",
    link: "Privacy Policy",
    link2: "Terms of Service"
    };

function Footer() {
  return (
    <footer className={styles.footer}>
        <p>{copy.text}</p>
        <p>{copy.link}</p>
        <p>{copy.link2}</p>
    </footer>
  );
}

export default Footer;
