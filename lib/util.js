// Exports the debug method to anything that has the util file included
exports.debug = (title, obj, status) => {
  // A seperator to keep clean logging
  const seperator = '\n====================================\n';
  // This is the total output of everything.
  const output = seperator + title + seperator;
  // if the DEBUG environmental variable is true
  if (process.env.DEBUG) {
    // Console log out the output, object, and status
    console.log(output, obj, status);
  }
};

exports.test = (title, obj, status) => {
  const seperator = '\n====================================\n';
  const output = seperator + title + seperator;
  console.log(output, obj, status);
};
