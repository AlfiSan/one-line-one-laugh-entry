// One Line, One Laugh entry (Node 22, standard library only): writes one
// original funny line to /output/entry.txt. The line is printed byte for
// byte by the program, so two runs of the program always write the same
// bytes.
//
// The joke: a phone dying at 1% is a tiny scene everyone has lived through,
// and the laugh lands on the last words — the dead black rectangle is
// treated like a person who owes an apology. One concrete moment, one turn,
// plain words, no setup paragraph, no meme, no shared knowledge needed.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'My phone died at 1%, so I just stood there staring at a black rectangle like it owed me an apology.';

// The gate only accepts 1 to 140 characters: refuse to write an entry that
// could never be judged instead of silently producing an invalid file.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
