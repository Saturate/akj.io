import styles from "./LandingPageTemplate.module.css";
import { Container } from "./components/Container";
import { Paragraph } from "./components/Paragraph";
import { Section } from "./components/Section";
import { H1 } from "./components/headings";

const LandingPageTemplate = () => {
  return (
    <div className={styles.landingPageTemplate}>
      <main>
        <Section>
          <Container center className={styles.headerSection}>
            <H1>Letsgoooo 🎉</H1>
          </Container>
        </Section>
      </main>
      <footer>
        <Section>
          <Container center>
            <Paragraph>Hello</Paragraph>
          </Container>
        </Section>
      </footer>
    </div>
  );
};

export default LandingPageTemplate;
