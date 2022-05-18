import Head from "next/head";
import Accuiel from "./home";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>
          www.jeanclementdiambilayministries.org | l' apôtre jean clément
          diambilay, Pasteur responsable de la Nouvelle Cité de David en RD
          Congo.
        </title>
        <link rel="canonical" href="https://jcdiambilayministries.org/" />
        <meta http-equiv="content-language" content="fr" />
        <meta name="robots" content="index, follow" />
        <meta
          name="news_keywords"
          content="Ministère,Citations, Livres, Eglise,Pasteur,Apôtre"
        />
        <meta
          name="description"
          content="site personnel de l'Apôtre Jean-Clément Diambilay de l'Eglise Nouvelle Cité De David en RD Congo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="jcdiambilayministries.org" />
        <meta
          property="og:url"
          content="https://jcdiambilayministries.org/home"
        />
        <meta
          property="og:title"
          content="site personnel de l'Apôtre Jean-Clément Diambilay de l'Eglise Nouvelle Cité De David en RD Congo"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/personnal/image/upload/v1652879529/jcdiambilayministries/logobig_wiv9w2.jpg"
        />
        <meta
          property="og:image:url"
          content="https://res.cloudinary.com/personnal/image/upload/v1652879529/jcdiambilayministries/logobig_wiv9w2.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/personnal/image/upload/v1652879529/jcdiambilayministries/logobig_wiv9w2.jpg"
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="MobileOptimized" content="width" />
        <meta
          property="og:image:alt"
          content="Logo jcdiambilayministries.org"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="image_src" href="/logobig.jpg" />
        <link rel="shortlink" href="https://jcdiambilayministries.org/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Accuiel />
    </div>
  );
}
