import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";

export async function getStaticProps({ locale }) {
 let greeting = 
  locale === "en-US"
  ? "Hello World!"
  : locale === "pt-BR"
  ? "Olá Mundo!"
  : locale === "de"
  ? "Boujour le monde"
  : "";

  return {
    props: {
      greeting
    }
  }
}

export default function Home(props) {
  let { t } = useTranslation();

  return (
    <Layout>
      <h1>{props.greeting}</h1>
    </Layout>
  );
}
