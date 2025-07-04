import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, parse, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../public');
const outputDir = join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
}

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

// Process all images in the directory
async function processImages(directory) {
    const files = await readdir(directory);

    for (const file of files) {
        const inputPath = join(directory, file);
        const stats = await stat(inputPath);

        if (stats.isDirectory()) {
            // Recursively process subdirectories
            await processImages(inputPath);
            continue;
        }

        const ext = extname(file).toLowerCase();
        if (!supportedFormats.includes(ext)) continue;

        const relativePath = relative(inputDir, directory);
        const outputSubDir = join(outputDir, relativePath);
        if (!existsSync(outputSubDir)) {
            await mkdir(outputSubDir, { recursive: true });
        }

        const outputPath = join(outputSubDir, `${parse(file).name}.webp`);

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .resize(1920, null, { // Max width 1920px, maintain aspect ratio
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .toFile(outputPath);

            console.log(`Optimized: ${file} -> ${relative(inputDir, outputPath)}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

// Start processing
try {
    await processImages(inputDir);
    console.log('Image optimization complete!');
} catch (error) {
    console.error('Error during optimization:', error);
} 