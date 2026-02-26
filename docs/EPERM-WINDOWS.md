# EPERM en Windows (.next\trace)

Si ves **`EPERM: operation not permitted, open '.next\trace'`** al hacer `npm run dev` o `npm run build`:

## 1. Un solo proceso a la vez
- **Antes de `npm run build`**: cerrá el servidor de desarrollo (`Ctrl+C` en la terminal donde corre `npm run dev`).
- No ejecutes `dev` y `build` al mismo tiempo.

## 2. Limpiar y volver a construir
Con el servidor dev **cerrado**:

```bash
npm run clean
npm run build
```

(O solo `npm run dev` después de `npm run clean`.)

## 3. Si sigue fallando: exclusiones de Windows Defender
El antivirus a veces bloquea la carpeta `.next`:

1. **Windows Security** → **Virus & threat protection** → **Manage settings**
2. **Exclusions** → **Add or remove exclusions** → **Add an exclusion** → **Folder**
3. Elegí la carpeta del proyecto: `C:\Users\Franco Luca Parera\petra-construcciones`

Reiniciá la terminal y probá de nuevo.

## 4. OneDrive / sincronización
Si el proyecto está dentro de una carpeta sincronizada (OneDrive, Dropbox, etc.), movelo a una ruta local que no se sincronice (por ejemplo `C:\dev\petra-construcciones`).

---

El error no impide que `next dev` diga "Ready": la app puede funcionar, pero el build puede fallar. Limpiar `.next` y no tener dos procesos tocando la misma carpeta suele resolverlo.
