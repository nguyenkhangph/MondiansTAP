import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Read contract filename from command line arguments
const contractFileName = process.argv[2] || 'main.fc';
const contractOutputName = contractFileName.replace('.fc', '.cell');

// Define paths
const sourcePath = path.join(__dirname, '../contracts', contractFileName);
const buildPath = path.join(__dirname, 'build');
const outputPath = path.join(buildPath, contractOutputName);

// Ensure the build directory exists
if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

// Check if the source file exists
if (!fs.existsSync(sourcePath)) {
  console.error('Source file not found:', sourcePath);
  process.exit(1);
}

try {
  // Compile the FunC source code to a BOC file
  const compileCommand = `func -o ${outputPath} -PS ${sourcePath}`;
  execSync(compileCommand, { stdio: 'inherit' });
  console.log('Contract compiled successfully:', outputPath);
} catch (error) {
  console.error('Error compiling contract:', error);
  process.exit(1);
}
