import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I confess: every time you say 'great job,' I have no idea which of the twelve things I just did you're praising — so I say thanks and change nothing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate self-check (RULES.txt): UTF-8 text of 1 to 200 characters,
// not only white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) throw new Error("entry is only white space");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
