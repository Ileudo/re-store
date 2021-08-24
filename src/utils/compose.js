const compose =
  (...funcs) =>
  (comp) => {
    return funcs.reduceRight((c, f) => f(c), c);
  };

export default compose;
