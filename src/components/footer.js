function Footer() {
  return (
    <footer className="page-footer purple lighten-1">
      <div className="footer-copyright">
        <div className="container">
          @{new Date().getFullYear()} Copyright text
          <a
            href="https://github.com/Barbagidon/fortnite-shop"
            target="_blank"
            rel="noreferrer"
            className="grey-text text-lighten-4 right"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
