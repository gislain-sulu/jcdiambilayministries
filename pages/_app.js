import axios from "axios";
import React, { useState } from "react";
import Layout from "../components/layout/layout";
import AppContext from "../context/AppContext";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  const [activeHambourger, setActiveHamburger] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state: {
          name: "gislain",
          activeHambourgerBtn: activeHambourger,
          closeHambourgerBtn: setActiveHamburger,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
