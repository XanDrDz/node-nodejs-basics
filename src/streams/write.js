import fs, { promises } from 'fs';
import { Writable } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const write = async () => {

    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

    const writableStream = fs.createWriteStream(filePath);

    writableStream.setDefaultEncoding('utf8');

    process.stdin.pipe(writableStream);

    writableStream.on('finish', () => {
        console.log(`Data written to ${filePath}`);
    });

    writableStream.on('error', (error) => {
        console.error(`Error writing to ${filePath}: ${error}`);
    });
};

await write();