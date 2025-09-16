// scripts/esm-cjs.js
const fs = require("fs");
const path = require("path");

const dist = path.resolve(__dirname, "..", "dist");
const esmIndexSrc = path.join(dist, "index.js"); // emitted by tsc
const esmIndexTarget = path.join(dist, "index.esm.js");
const cjsIndex = path.join(dist, "index.cjs.js");

if (!fs.existsSync(esmIndexSrc)) {
  console.error("Expected", esmIndexSrc, "to exist. Run tsc before this script or check tsconfig rootDir/outDir.");
  process.exit(1);
}

const esm = fs.readFileSync(esmIndexSrc, "utf8");

// copy ESM index
fs.writeFileSync(esmIndexTarget, esm, "utf8");

// create a tiny CJS shim that requires the ESM entry via dynamic import at runtime.
// Note: bundlers will honor index.esm.js. This shim is small convenience; for robust CJS support consider a full CJS build later.
const cjs = `\"use strict\";\n\n// Simple CJS shim that dynamically imports the ESM module and attaches its exports to module.exports.\nconst p = import('./index.esm.js');\nmodule.exports = p.then(m => (m && m.default) ? m.default : m).catch(err => { throw err; });\n`;

fs.writeFileSync(cjsIndex, cjs, "utf8");

console.log("Wrote dist/index.esm.js and dist/index.cjs.js (shim).");
