import * as fs from "node:fs";

const LINE =
  "Payday finally came. I resigned immediately.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
