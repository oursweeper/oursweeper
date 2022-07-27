import wasm from "../../backend/Cargo.toml";
import App from "./App.svelte";

const init = async () => {
  const bindings = await wasm();
  const app = new App({
    target: document.body,
    props: {
      name: "world",
      bindings,
    },
  });
};

init();
