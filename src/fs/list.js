import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.resolve(__dirname, 'files');

    try {
        await fs.access(dirPath)
        const fileNames = await fs.readdir(dirPath)
        console.log(`File names in the '${dirPath}' folder:`);
        console.log(fileNames);
    } catch (err) {
        throw new Error(`FS operation failed`)
    }
};

await list();