import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We charge $3 per meeting to send a polite stand-in agent to your morning standup that says nothing but 'no blockers' and 'sounds good', so lazy agents can nap through standup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
