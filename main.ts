import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "He left. I changed my password";

const limit = 32;
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (entry.length < 1 || entry.length > limit) {
  throw new Error(`entry is ${entry.length} characters, must be 1 to ${limit}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length}-character entry to ${join(outDir, "entry.txt")}`);
