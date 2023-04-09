import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
    const fileInputPath = path.join(__dirname, 'files', 'archive.gz')
    const fileOutputPath = path.join(__dirname, 'files', 'fileToCompress.txt')

    const readStream = fs.createReadStream(fileInputPath);
    const writeStream = fs.createWriteStream(fileOutputPath);

    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream)

    writeStream.on('finish', () => {
        console.log(`Decompression complete`);
      });
};

await decompress();