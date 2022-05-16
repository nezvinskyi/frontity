const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/theme-first/src/index.js</pre>
    </>
  );
};

export default {
  name: "theme-first",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
