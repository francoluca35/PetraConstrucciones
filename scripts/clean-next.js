const fs = require('fs');
const path = '.next';
try {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
    console.log('.next eliminado.');
  } else {
    console.log('.next no existe.');
  }
} catch (err) {
  console.error('EPERM: Cierra el servidor dev (Ctrl+C) y cualquier proceso que use la carpeta .next.');
  console.error('Si sigue fallando, agrega la carpeta del proyecto a exclusiones de Windows Defender.');
  process.exit(1);
}
