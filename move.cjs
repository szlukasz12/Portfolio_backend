const fs = require("fs");
const path = require("path");
const shell = require("shelljs");

const mode = process.argv[2]; // np. "prod"
const sourceFolder = "dist"; 
const targetBase = "/mnt/SMB/Ogolne/NAUKA_JS_TS_REACT/Portfolio_backend/";

if (!mode) {
  console.error("Błąd: Podaj folder (np. node move.cjs prod)");
  process.exit(1);
}

const destinationPath = path.join(targetBase, mode);

// 1. Sprawdzenie builda
if (!fs.existsSync(sourceFolder)) {
  console.error(`Błąd: Folder '${sourceFolder}' nie istnieje. Uruchom build.`);
  process.exit(1);
}

// 2. Czyszczenie i tworzenie folderu
console.log(`Przygotowywanie folderu: ${destinationPath}...`);
shell.rm("-rf", destinationPath);
shell.mkdir("-p", destinationPath);

// 3. Kopiowanie skompilowanego kodu (pliki .js)
console.log(`Kopiowanie kodu...`);
shell.cp("-R", path.join(sourceFolder, "*"), destinationPath);

// 4. Kopiowanie plików konfiguracyjnych (package.json i .env)
console.log(`Kopiowanie plików konfiguracyjnych...`);
shell.cp("package.json", destinationPath);
shell.cp("package-lock.json", destinationPath);
if (fs.existsSync(".env")) {
    shell.cp(".env", destinationPath);
}

console.log(`✅ Pliki skopiowane do ${destinationPath}`);