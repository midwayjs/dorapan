const test = require('./test');
if(test.host) {
  module.exports = test.host;
  return;
}

const PANDORA_HOME = process.env.PANDORA_HOME;
if(!PANDORA_HOME) {
  throw new Error(
    'Should require(\'dorapan\') under Pandora.js environment!\n' +
    'You may refer to https://github.com/midwayjs/dorapan/wiki/Under-Unit-Test to find some helpful tips if you are running your own unit tests.\n'
  );
}
module.exports = process.env.PANDORA_HOME;
