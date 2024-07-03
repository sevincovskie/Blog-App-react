import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { ROUTER } from "./constant/router.js";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Error = lazy(() => import("./pages/404error"));

const Articles = lazy(() => import("./pages/articles"));
const ArticleDetails = lazy(() => import("./pages/articles/detail"));
const ArticleCreate = lazy(() => import("./pages/articles/create"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        }
      >
        <Routes>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.ABOUT} element={<About />} />
          {/* <Route path="/faq" element={<Faq />} /> */}

          {/* <Route path="/favorites" element={<Favorites/>}/> */}

          <Route path={ROUTER.ARTICLES} element={<Articles />} />
          <Route path={ROUTER.ARTICLES_CREATE} element={<ArticleCreate />} />
          <Route path={ROUTER.ARTICLES + "/:id"} element={<ArticleDetails />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
