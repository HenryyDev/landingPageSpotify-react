import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-footer">
        <span className="text title">Testar o Premium de graça</span>
        <span className="text subtitle">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </span>
      </div>
      <button type="button" className="footer__button">
        <span className="text">Inscreva-se grátis</span>
      </button>
    </footer>
  );
};

export default Footer;
