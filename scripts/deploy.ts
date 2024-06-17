// TypeScript script to deploy the compiled Fift script on TON blockchain
import { execSync } from 'child_process';

try {
    const output = execSync('lite-client -C ton-lite-client-test1.config.json -c "sendfile build/main.boc"');
    console.log('Deployment successful:', output.toString());
} catch (error) {
    console.error('Deployment error:', error);
}
