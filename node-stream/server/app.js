import express from 'express';
import {createReadStream, readFileSync, statSync} from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cros from 'cors';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

console.log("first", _dirname);



const app = express();
app.use(cros());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/video', (req, res) => {
    const filepath = `${_dirname}/public/video.mp4`;
    const fileStat = statSync(filepath);

    const renge = req.headers.range;
    if (!renge) {
        res.status(416).send('Range not specified');
        return;
    }

    const chunksize = 10 ** 6; // 1MB
    const start = Number(renge.replace(/\D/g, ''));
    const end = start + chunksize > fileStat.size ? fileStat.size - 1 : start + chunksize - 1;

    const contentLength = end - start + 1;

    const fileStream = createReadStream(filepath, {
        start,
        end
    });
    
    fileStream.pipe(res);

    const header = {
        'Content-Range': `bytes ${start}-${end}/${fileStat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4'
    }

    res.writeHead(206, header)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});