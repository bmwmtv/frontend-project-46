import _ from 'lodash';

const diff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  const text = keys.flatMap((key) => {
    // если равны ключи , но значения разные
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] !== data2[key]) {
        return (`  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`);
      }
    }
    // если ключ есть в первом файле но отсутствует во втором
    if (_.has(data1, key) && !_.has(data2, key)) {
      return (`  - ${key}: ${data1[key]}`);
    }

    // если ключ есть во втором файле но отсутствует в первом
    if (!_.has(data1, key) && _.has(data2, key)) {
      return (`  + ${key}: ${data2[key]}`);
    }
    // если равны ключи и значения
    return (`    ${key}: ${data1[key]}`);
  });

  const result = _.concat('{', text, '}');
  return _.join(result, '\n');
};

export default diff;
