// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

exports.moment = require('moment');

exports.dump = (obj) => JSON.stringify(obj, null, 2);

exports.siteName = `Paulo Rivera - Web Dev`;

