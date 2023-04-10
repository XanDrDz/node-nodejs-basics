import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('error', (err) => {
        console.error(err);
    });

    readStream.on('end', () => {
        console.log('\nFinished reading file.');
    });
};

await read();