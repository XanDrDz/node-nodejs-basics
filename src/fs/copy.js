import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDir = path.resolve(__dirname, 'files');
    const destDir = path.resolve(__dirname, 'files_copy');

    try {
        await fs.access(destDir);
        throw new Error('FS operation failed');
      } catch (err) {
        if (err.code !== 'ENOENT') {
          throw err;
        }
      }
      try {
        await fs.mkdir(destDir);
      } catch (err) {
        throw new Error('FS operation failed');
      }
      try {
        const files = await fs.readdir(sourceDir);
        for (const file of files) {
          await fs.copyFile(path.join(sourceDir, file), path.join(destDir, file));
        }
      } catch (err) {
        throw new Error('FS operation failed');
      }
    }

await copy();
