import './styles.css';

const Footer = () => (
  <article>
    <div className="footer__social-media footer__card--6">
      <div className="footer__social-icon">
        <span><ion-icon name="logo-facebook" /></span>
        <span><ion-icon name="logo-instagram" /></span>
        <span><ion-icon name="logo-twitter" /></span>
        <span><ion-icon name="logo-google" /></span>
      </div>
      <div className="footer__social-text">
        <p className="footer__social-text-link">Copyright © 2023 Restaurante. Todos los derechos reservados.</p>
      </div>
      <div className="footer__box-red">
        <ion-icon name="logo-react" />
      </div>
    </div>
  </article>
);

export default Footer;
