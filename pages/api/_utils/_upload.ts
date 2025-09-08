// pages/api/_upload.ts
import type { NextApiRequest } from "next";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

export const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export function ensureUploadDir() {
  if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export function parseMultipart(
  req: NextApiRequest
): Promise<{ fields: Record<string, any>; files: Record<string, File> }> {
  ensureUploadDir();

  const form = formidable({
    uploadDir: UPLOAD_DIR,
    keepExtensions: true, // оставим расширение
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      // поля-массивы прокинем как JSON если строка
      const normalized: Record<string, any> = {};
      for (const [k, v] of Object.entries(fields)) {
        const val = Array.isArray(v) ? v[0] : v;
        if (
          typeof val === "string" &&
          (val.startsWith("[") || val.startsWith("{"))
        ) {
          try {
            normalized[k] = JSON.parse(val);
          } catch {
            normalized[k] = val;
          }
        } else {
          normalized[k] = val;
        }
      }
      const fileMap: Record<string, File> = {};
      for (const [k, f] of Object.entries(files)) {
        const one = Array.isArray(f) ? f[0] : (f as File);
        if (one) fileMap[k] = one;
      }
      resolve({ fields: normalized, files: fileMap });
    });
  });
}
