import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    const fileInputPath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const fileOutputPath = path.join(__dirname, 'files', 'archive.gz')

    const readStream = fs.createReadStream(fileInputPath);
    const writeStream = fs.createWriteStream(fileOutputPath);

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream)

    writeStream.on('finish', () => {
        console.log(`Compression complete`);
      });
};

await compress();