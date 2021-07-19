const Tracing = {
  install: (app) => {
    const $trace = (message) => {
      if (process.env.NODE_ENV === 'production') return;
      // eslint-disable-next-line
      console.log(message);
    };

    app.provide('trace', $trace);
  },
};
export default Tracing;
