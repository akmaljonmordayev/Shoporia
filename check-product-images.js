import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const availableImages = fs.readdirSync(publicDir)
  .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

console.log(`��� Public papkasidagi rasmlar:\n`);
availableImages.forEach((img, i) => {
  console.log(`  ${i+1}. ${img}`);
});

const dbPath = path.join(__dirname, 'db.json');
const dbContent = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(dbContent);

console.log(`\n\n��� PRODUKTLAR VA ULARNING RASMLAR:\n`);
console.log(`${'='.repeat(80)}\n`);

const categories = {
  'mobile': '��� SMARTFONLAR',
  'laptop': '��� LAPTOPLAR',
  'TVs': '��� TELEVIZORLAR',
  'Smartwatches': '⌚ SMART SOATLAR',
  'audio': '��� AUDIO',
  'washingmachines': '��� KUVALASHTIRISH MASHINALARI',
  'heaters': '��� ISITISH ASBOBLARI',
  'airconditioners': '❄️ KONDITSIONERLAR',
  'Laptopaccessories': '���️ LAPTOP AKSESSUARLARI'
};

if (db.typeOfElectronics && db.typeOfElectronics[0]) {
  const electronics = db.typeOfElectronics[0];
  
  Object.keys(electronics).forEach(category => {
    if (Array.isArray(electronics[category])) {
      const categoryName = categories[category] || `��� ${category.toUpperCase()}`;
      console.log(`\n${categoryName}:\n`);
      
      electronics[category].forEach((product, idx) => {
        const imageName = product.image ? product.image.split('/').pop() : 'YO\'Q';
        console.log(`  ${idx+1}. ${product.title}`);
        console.log(`     Rasm: ${imageName}`);
        console.log();
      });
    }
  });
}
