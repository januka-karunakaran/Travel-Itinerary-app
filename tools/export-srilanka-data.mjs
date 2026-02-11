import fs from "fs";
import vm from "vm";

const sourcePath = "Frontend/src/data/srilankaData.jsx";
const outDir = "Backend/src/main/resources/data";

const source = fs.readFileSync(sourcePath, "utf8");
const transformed = source.replace(/export const /g, "const ");

const context = {};
vm.createContext(context);
vm.runInContext(
  `${transformed}\n;globalThis.__data = { districts, itineraryPlans, tourGuides };`,
  context,
  { timeout: 2000 },
);

const { districts, itineraryPlans, tourGuides } = context.__data || {};

if (!districts || !itineraryPlans || !tourGuides) {
  throw new Error("Failed to extract data from srilankaData.jsx");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  `${outDir}/districts.json`,
  JSON.stringify(districts, null, 2),
);
fs.writeFileSync(
  `${outDir}/itineraryPlans.json`,
  JSON.stringify(itineraryPlans, null, 2),
);
fs.writeFileSync(
  `${outDir}/tourGuides.json`,
  JSON.stringify(tourGuides, null, 2),
);

console.log("Exported districts, itineraryPlans, and tourGuides JSON.");
