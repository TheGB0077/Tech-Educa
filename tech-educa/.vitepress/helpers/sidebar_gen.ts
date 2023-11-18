import { globbyStream } from "globby";
import { resolve } from "path";

export default async function sidebarGen(): Promise<any> {
  let object: any = {};
  for await (const path of globbyStream("tech-educa/**/_.mjs")) {
    const module = await import(resolve(path.toString()));
    const filePath = path.toString().replace(/\/_.mjs|tech-educa/g, "");
    object[filePath] = {
      base: filePath,
      items: module.items,
    };
  }
  return object;
}
