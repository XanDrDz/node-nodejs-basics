import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
       await fs.access(filePath);
       await fs.unlink(filePath);
       console.log(`File deleted`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(`FS operation failed`);
          }
    }
};

await remove();