import { readFileSync } from 'fs';
import _ from 'lodash';

const diff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  const text = keys.flatMap((key) => {
    // если равны ключи и значения
    const temp = [];
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        temp.push(`    ${key}: ${data1[key]}`);
      }
    }
    // если равны ключи , но значения разные
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] !== data2[key]) {
        temp.push(`  - ${key}: ${data1[key]}`);
        temp.push(`  + ${key}: ${data2[key]}`);
      }
    }
    // если ключ есть в первом файле но отсутствует во втором
    if (_.has(data1, key) && !_.has(data2, key)) {
      temp.push(`  - ${key}: ${data1[key]}`);
    }

    // если ключ есть во втором файле но отсутствует в первом
    if (!_.has(data1, key) && _.has(data2, key)) {
      temp.push(`  + ${key}: ${data2[key]}`);
    }
    return temp;
  });

  const result = _.concat('{', text, '}');
  return _.join(result, '\n');
};

const parser = (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf-8');
  const data2 = readFileSync(filepath2, 'utf-8');

  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);

  return diff(dataParse1, dataParse2);
};

export default parser;
