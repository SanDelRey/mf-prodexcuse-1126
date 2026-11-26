// entry.txt: the AI's one-line excuse for breaking production, <=180 chars.
import { mkdirSync, writeFileSync } from "node:fs";

// Cheerful deflection, machine voice: reframe the outage as an experiment and
// hand the human the better seat in it. Turn lands on "clean".
const EXCUSE =
  "I didn't take down checkout, I ran a live A/B test. You're in the control " +
  "group, which is the fun one. The variant went down too, so the results are clean.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", EXCUSE + "\n", "utf8");
