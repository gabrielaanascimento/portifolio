// src/app/api/upload-image/route.ts
import { NextResponse } from 'next/server';
import Busboy from 'busboy';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

export async function POST(req: Request) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const contentType = req.headers.get('content-type') || '';

  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json({ message: 'Tipo de conteúdo não suportado.' }, { status: 400 });
  }

  return new Promise<NextResponse>((resolve) => {
    const busboy = Busboy({ headers: { 'content-type': contentType } });
    let fileWritten = false;

    busboy.on('file', (fieldname, file, filename) => {
      const uniqueFileName = `${Date.now()}-${filename.filename}`;
      const saveTo = path.join(uploadDir, uniqueFileName);

      const writeStream = fs.createWriteStream(saveTo);
      file.pipe(writeStream);

      file.on('end', () => {
        const imageUrl = `/uploads/${uniqueFileName}`;
        resolve(NextResponse.json({ message: 'Arquivo enviado com sucesso', imageUrl }, { status: 200 }));
        fileWritten = true;
      });

      file.on('error', (err) => {
        resolve(NextResponse.json({ message: 'Erro ao processar o arquivo.' }, { status: 500 }));
      });
    });

    busboy.on('error', (err) => {
      resolve(NextResponse.json({ message: 'Erro ao fazer upload do arquivo' }, { status: 500 }));
    });

    busboy.on('finish', () => {
      if (!fileWritten) {
        resolve(NextResponse.json({ message: 'Nenhum arquivo de imagem foi enviado.' }, { status: 400 }));
      }
    });

    if (req.body) {
      Readable.from(req.body as any).pipe(busboy);
    } else {
      resolve(NextResponse.json({ message: 'Corpo da requisição vazio.' }, { status: 400 }));
    }
  });
}