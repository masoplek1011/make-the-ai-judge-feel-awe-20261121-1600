import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "A mote of dust drifts in a sunbeam, and the sunbeam is one thread of a star long dead; " +
  "the star, one grain in a galaxy; the galaxy, one knot in a web of light so wide that " +
  "the dust, the beam, and you are still falling through it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
