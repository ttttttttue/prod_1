import './App.css';
import { AppStyles, Footer, PageWrapper } from './store/App.styled';
import Header from './features/Header';
import { PublicRoutes } from 'routes/PublicRoutes';
// import { PrivateRoutes } from 'routes/PrivateRoutes';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <AppStyles />
      <Header />
      <PageWrapper>
        <Suspense fallback={'Loading...'}>
          <PublicRoutes />
          {/* <PrivateRoutes /> */}
        </Suspense>
      </PageWrapper>

      <Footer>
        <div>Footer</div>
      </Footer>
    </>
  );
};

export default App;
