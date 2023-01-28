const _ =  require('lodash');

const item = [1, [2, [3]]]
const result = _.flatMapDeep(item);
console.log(result)