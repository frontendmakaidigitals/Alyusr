const fs = require("fs");
const path = require("path");

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      checkDir(filePath);
    } else {
      // Only flag files that contain & or ,
      if (/[&,]/.test(file)) {
        console.warn("⚠️  Unsafe filename:", filePath);
      }
    }
  });
}

checkDir(path.join(process.cwd(), "public"));
