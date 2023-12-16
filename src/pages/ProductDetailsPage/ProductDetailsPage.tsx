import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';

const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Page products</title>
          <meta name="description" content="Marketplace" />
        </Helmet>
      </HelmetProvider>
      <h1>Page Product</h1>
    </>
  );
};
export default ProductDetailsPage;
