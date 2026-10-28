const fs = require("node:fs");
const path = require("node:path");

const [id, title, description] = process.argv.slice(2);
if (!id || !title || !description || process.argv.length !== 5) {
  throw new Error(
    'Usage: node update-config.js <id> "<title>" "<description>"',
  );
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
  throw new Error("Assignment ID must use lowercase kebab-case.");
}

const root = path.resolve(__dirname, "../../../..");
const configPath = path.join(root, "config.json");
const assignmentPath = path.join(root, "assignments", id);

if (!fs.existsSync(assignmentPath)) {
  throw new Error(`Assignment directory not found: assignments/${id}`);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
if (config.assignments.some((assignment) => assignment.id === id)) {
  throw new Error(`Assignment ID already exists: ${id}`);
}

config.assignments.push({
  id,
  title,
  description,
  path: `assignments/${id}`,
});
fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
