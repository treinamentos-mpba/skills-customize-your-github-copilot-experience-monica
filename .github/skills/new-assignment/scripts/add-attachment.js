const fs = require("node:fs");
const path = require("node:path");

const [id, name, filename, type] = process.argv.slice(2);
if (!id || !name || !filename || !type || process.argv.length !== 6) {
  throw new Error(
    'Usage: node add-attachment.js <id> "<display-name>" <filename> <type>',
  );
}
if (path.basename(filename) !== filename) {
  throw new Error("Attachment filename must not include a directory path.");
}

const root = path.resolve(__dirname, "../../../..");
const configPath = path.join(root, "config.json");
const assignmentPath = path.join(root, "assignments", id);
const attachmentPath = path.join(assignmentPath, filename);

if (!fs.existsSync(attachmentPath) || !fs.statSync(attachmentPath).isFile()) {
  throw new Error(`Attachment file not found: assignments/${id}/${filename}`);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const assignment = config.assignments.find((entry) => entry.id === id);
if (!assignment) {
  throw new Error(`Assignment ID not found in config.json: ${id}`);
}

assignment.attachments ??= [];
if (assignment.attachments.some((attachment) => attachment.file === filename)) {
  throw new Error(`Attachment is already registered: ${filename}`);
}

assignment.attachments.push({ name, file: filename, type });
fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
