// pages/api/_upload.ts
import { IncomingForm, File } from "formidable";
import path from "path";

export function parseMultipart(
  req: any
): Promise<{ fields: any; files: Record<string, File[]> }> {
  const uploadDir = path.join(process.cwd(), "public", "images", "catalog");
  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
    multiples: true,
  });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files: files as any });
    });
  });
}
