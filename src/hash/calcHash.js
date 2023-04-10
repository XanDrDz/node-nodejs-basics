import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const fileContents = await readFile(filePath);
        const hash = createHash('sha256');
        hash.update(fileContents);
        const hex = hash.digest('hex');
        console.log(hex);
      } catch (error) {
        console.error(error);
      }
};

await calculateHash();