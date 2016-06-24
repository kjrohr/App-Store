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
// This will display all the users
exports.userReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let index = 0; index < obj.length; index++) {
      console.log('ID: ' + obj[index].id + '\n Name: ' + obj[index].name
      + '\n Age: ' + obj[index].age
      + '\n Hobby: ' + obj[index].hobby);
    }
  }
};
// Shows the apps properties
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
// Shows all apps and their properties
exports.appReadAll = (title, obj) => {
  // A seperator to keep cleaning logging.
  const seperator = '\n====================================\n';
  // This is the output of everything
  const output = seperator + title + seperator;
  if (process.env.DEBUG) {
    console.log(output);
    // Should show undefined on delete
    // Should show correct data by looking by id
    for (let index = 0; index < obj.length; index++) {
      console.log('ID: ' + obj[index].id + '\n Name: ' + obj[index].name
      + '\n Code: ' + obj[index].code);
    }
  }
};
