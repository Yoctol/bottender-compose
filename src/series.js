module.exports = actions => {
  const fn = async (context, ...otherArgs) => {
    for (let i = 0; i < actions.length; i++) {
      await actions[i](context, ...otherArgs); // eslint-disable-line no-await-in-loop
    }
  };

  const names = actions.map(action => action.name || 'Anonymous');

  const name = `Series(${names.join(', ')})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
