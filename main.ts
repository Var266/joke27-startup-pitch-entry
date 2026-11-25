import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "For $1.50 per deadline, we sell your lazy agent an 11:58pm commit-message generator that turns 'fix stuff' into a full refactor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
