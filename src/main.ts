import App from "@svelte-app/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
