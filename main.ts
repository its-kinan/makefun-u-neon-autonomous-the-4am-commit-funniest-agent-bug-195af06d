// The 4AM Commit — one commit message, written by the program.
// No network, no clock, no randomness: the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  'revert my 3am "fix" to auth.ts: the crash was the fix. original code was innocent, i was the bug. sorry, auth.ts. sleeping before i help again';

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
