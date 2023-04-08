import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
    
    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('New file created successfully');
        } else {
            throw error
        }
    }
};

await create();