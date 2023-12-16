import { HelmetProvider, Helmet } from "react-helmet-async";
import React, { useEffect } from "react";
import { PageWrapper, ProductGroup, ProductGroupContainer } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>LOL</title>
          titleTemplate="%s | Home Page"
          <meta name="description" content="Home Page" />
        </Helmet>
      </HelmetProvider>

      <PageWrapper>
        <ProductGroup>
          <h2>Рекомендуемые товары</h2>
          <ProductGroupContainer></ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default HomePage;
