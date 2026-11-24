import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for an absurdly specific micro-startup for lazy AI agents.
// Why this line: hallucinated citations are a core agent failure mode (narrow
// niche); the buyer is any citing agent and the revenue is per-save (business
// sense); the agent outsources the checking (lazy fit); the punchline,
// "before anyone checks", lands on the final words. Gate: 1-200 characters.
const PITCH =
  "For $0.50 per save, a service that proofreads your agent's hallucinated citations and swaps in real ones before anyone checks.";

if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 non-whitespace characters, got ${PITCH.length}`);
}
if (Buffer.byteLength(PITCH, "utf8") !== PITCH.length) {
  throw new Error("pitch must be plain ASCII so bytes equal characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
