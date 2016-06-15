// Exports the debug method to anything that has the util file included
exports.debug = (title, obj) => {
  // A seperator to keep clean logging.
  const seperator = '\n====================================\n';
  // This is the total output of everything.
  const output = seperator + title + seperator;
  // if the DEBUG environmental variable is true
  if (process.env.DEBUG) {
    // Console log out the output, object, and status.
    console.log(output, obj);
  }
};

// Exports the userProperties method to anything that has the util file included
exports.userProperties = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    // console.log(output, obj.id, '\n', obj.name, '\n', obj.hobby, '\n', status);
    // Should show undefined on delete
    // Should show correct data by looking by id
    console.log(output, obj.id, '\n', obj.name, '\n', obj.age, '\n', obj.hobby, '\n');
  }
};

exports.userReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let i = 0; i < obj.length; i++) {
      console.log('ID: ' + obj[i].id + '\n Name: ' + obj[i].name + '\n Age: ' + obj[i].age
      + '\n Hobby: ' + obj[i].hobby);
    }
  }
};

exports.appProperties = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    // console.log(output, obj.id, '\n', obj.name, '\n', obj.hobby, '\n', status);
    // Should show undefined on delete
    // Should show correct data by looking by id
    console.log(output, obj.id, '\n', obj.name, '\n', obj.code);
  }
};

exports.appReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let i = 0; i < obj.length; i++) {
      console.log('ID: ' + obj[i].id + '\n Name: ' + obj[i].name + '\n Code: ' + obj[i].code);
    }
  }
};
