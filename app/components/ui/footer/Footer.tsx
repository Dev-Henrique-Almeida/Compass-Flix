import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerSite}>
      <img
        className={styles.logoFooter}
        src="/compass-logo.png"
        alt="Logo Compass Uol"
      />
      <nav className={styles.navFooter}>
        <a href="#">Política de privacidade</a>
        <a href="#">Acordo de assinatura</a>
        <a href="#">Ajuda</a>
        <a href="#">Dispositivos compatíveis</a>
        <a href="#">Sobre a Disney+</a>
        <a href="#">Publicidade personalizada</a>
      </nav>
      <p className={styles.footerDisney}>
        Disney+ é um serviço por assinatura pago, seu conteúdo está sujeito a
        disponibilidade. O serviço Disney+ é comercializado por Disney DTC
        LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
      </p>
      <p className={styles.footerDisney}>
        &copy; Disney. Todos os direitos reservados.
      </p>
    </footer>
  );
}
