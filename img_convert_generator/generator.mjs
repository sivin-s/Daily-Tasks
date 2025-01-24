import sharp from 'sharp';

async function generateIcons(sourceSvgPath, outputDir) {
  const sizes = [16, 32, 48, 128];

  for (const size of sizes) {
    await sharp(sourceSvgPath)
      .resize(size, size) 
      .toFile(`${outputDir}/icon${size}.svg`);
  }
}

// Example usage:
generateIcons('.././smallProjects/adBlocker/icons/16px.svg', '../smallProjects/adBlocker/icons'); 