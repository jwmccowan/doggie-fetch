import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
const Breeds = lazy(() => import("./pages/Breeds"));

const App: Component = () => {
  return (
    <div class="text-gray-700 bg-purple-50 min-h-screen">
      <Header />
      <Routes>
        <Route path="/breeds" component={Breeds} />
        <Route path="/" element={<Container>Welcome home</Container>} />
      </Routes>
    </div>
  );
};

export default App;
