import { Worker, isMainThread, workerData } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const numCPUs = os.cpus().length;

const performCalculations = async () => {
    const runWorkers = () => {
        const filePath = path.join(__dirname, './worker.js')
        const workers = [];
        const results = [];
      
        for (let i = 0; i < numCPUs; i++) {
          const worker = new Worker(filePath, { workerData: i + 10 });
          workers.push(worker);
      
          worker.on('message', (message) => {
            results[i] = { status: 'resolved', data: message };
            if (results.filter((result) => result).length === numCPUs) {
              console.log(results);
            }
          });
      
          worker.on('error', (error) => {
            results[i] = { status: 'error', data: null };
            console.error(`Worker ${i} has failed with error:`, error);
          });
      
          worker.on('exit', (code) => {
            if (code !== 0) {
              console.error(`Worker ${i} stopped with exit code ${code}`);
            }
          });
        }
      };
      
      if (isMainThread) {
        runWorkers();
      } else {
        const workerData = parseInt(workerData);
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
      }
};

await performCalculations();