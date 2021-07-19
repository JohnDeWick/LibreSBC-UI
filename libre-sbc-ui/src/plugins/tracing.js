const Tracing = {
  install: (app) => {
    const $trace = (...params) => {
      if (process.env.NODE_ENV === 'production') return;
      // eslint-disable-next-line
      return console.log(params);
    };

    app.provide('trace', $trace);
  },
};
export default Tracing;
