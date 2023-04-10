import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        console.log(fileContent)
    } catch (err) {
        throw new Error(`FS operation failed`)
    }
};

await read();