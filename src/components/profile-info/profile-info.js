import styles from './profile-info.module.css';

export default function ProfileInfo() {
  return (
    <section className={styles.headingMd} data-testid="profile-info">
      <p>
        Formado em Sistemas de Informação em 2019, tenho na área de qualidade de
        software desde 2013. Recentemente conclui a Especialização em Engenharia
        de Softeware, em 2022, pela UNISINOS/RS, e este ano ingressei na
        Especialização em Arquitetura de Software Distribuido. Atuo como
        Engenheiro de Qualidade no Sicredi.
      </p>
      <p>
        Gosto de aprender novos conhecimentos e realizar experimentos com novas
        tecnologias.
      </p>
    </section>
  );
}
