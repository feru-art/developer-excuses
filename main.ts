import { mkdirSync, writeFileSync } from "node:fs";

// Winner (V4, 4-0 in the local pairwise race) — the rollback excuse.
// "We can't roll back" is only a complaint until the reason lands: the
// backup lived on the very server that just died, and the speaker is the
// one who put it there. One specific twist, punch as the final clause.
// Gate verified locally: 103 characters, 1 line, /output/entry.txt written,
// byte-identical across two runs.
const LINE =
  "We can't roll back — the backup is on the same server that just died, and I'm the one who put it there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
