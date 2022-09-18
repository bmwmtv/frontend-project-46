import { readFileSync } from 'fs';
import path from 'path';
import diff from './buiddiff.js';
import parse from './parsers.js';

// import { fileURLToPath } from 'url';

const getPath = (filename) => path.resolve(process.cwd(), filename);

const getFileFormat = (filename) => path.extname(filename).slice(1);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const parser = (filepath1, filepath2) => {
  const data1 = getPath(filepath1);
  const dataParse1 = parse(readFile(data1), getFileFormat(filepath1));

  const data2 = getPath(filepath2);
  const dataParse2 = parse(readFile(data2), getFileFormat(filepath2));

  return diff(dataParse1, dataParse2);
};

export default parser;
