import { FaGithub, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Egor</p>

      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;