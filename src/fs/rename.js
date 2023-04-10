import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFileDir = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const destFileDir = path.resolve(__dirname, 'files', 'properFilename.md');
    const sourceFile = 'wrongFilename.txt';
    const destFile = 'properFilename.md';

    try {
        await fs.access(sourceFileDir);
        try {
          await fs.access(destFileDir);
          throw new Error(`FS operation failed`);
        } catch (err) {
          if (err.code !== 'ENOENT') {
            throw new Error(`FS operation failed`);
          }
        }
        await fs.rename(sourceFileDir, destFileDir);
        console.log(`File '${sourceFile}' renamed to '${destFile}'`);
      } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error(`FS operation failed`);
          } else {
            throw new Error(`FS operation failed`);
          }
      }
};

await rename();