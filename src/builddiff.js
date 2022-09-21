import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const diff = keys.flatMap((key) => {
    // если ключ есть во втором файле но отсутствует в первом
    if (!_.has(data1, key)) {
      return { key, value: data2[key], state: 'added' };
    }
    // если ключ есть в первом файле но отсутствует во втором
    if (!_.has(data2, key)) {
      return { key, value: data1[key], state: 'removed' };
    }

    // если равны ключи и значения
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], state: 'unchanged' };
    }
    // если есть вложенные объекты
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, value: buildDiff(data1[key], data2[key]), state: 'complex' };
    }

    // если равны ключи , но значения разные
    return { key, value: { oldValue: data1[key], newValue: data2[key] }, state: 'updated' };
  });

  return diff;
};

export default buildDiff;
