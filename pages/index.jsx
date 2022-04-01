import Head from "next/head";
import Accuiel from "./home";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>
          www.jeanclementdiambilayministries.org |l' apôtre jean clément
          diambilay, Pasteur responsable de la Nouvelle Cité de David en RD
          Congo.
        </title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accuiel />
    </div>
  );
}
