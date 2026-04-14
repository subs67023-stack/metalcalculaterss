/**
 * Post-build prerender script
 * Generates static HTML for all routes using Puppeteer
 * Run after `npm run build` to create SEO-friendly pre-rendered pages
 */
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIST_DIR = join(__dirname, 'dist');
const PORT = 4173;

const ALL_ROUTES = [
    '/',
    '/calculator',
    '/guides',
    '/glossary',
    '/hallmarking',
    '/about',
    '/privacy-policy',
    '/terms',
    '/contact',
    '/guides/understanding-silver-hallmarks',
    '/guides/calculate-melting-loss',
    '/guides/jewelry-alloy-mixing',
    '/guides/history-precious-metal-refining',
    '/guides/gold-karat-purity',
    '/guides/decoding-bis-hallmark-2026',
    '/guides/calculate-gold-tunch-masterclass',
    '/guides/difference-916-vs-995-gold',
    '/guides/silver-purity-standards-india',
    '/guides/setting-up-hallmarking-center-india',
    '/guides/huid-role-modern-jewelry',
    '/guides/detect-fake-gold-home',
    '/guides/science-aqua-regia-gold-recovery',
    '/guides/switching-kdm-to-zinc-solders',
    '/guides/marathi-gold-purity-guide',
    '/guides/hindi-hallmarking-guide',
    '/guides/mastering-mel-multi-batch-scrap',
    '/guides/gst-impact-metal-refining-india',
    '/guides/future-jewelry-tech-india',
];

// Simple static file server for the dist directory
function startServer() {
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.txt': 'text/plain',
        '.xml': 'application/xml',
    };

    const server = createServer((req, res) => {
        let filePath = join(DIST_DIR, req.url === '/' ? '/index.html' : req.url);
        
        // If file doesn't exist, serve index.html (SPA fallback)
        if (!existsSync(filePath)) {
            filePath = join(DIST_DIR, 'index.html');
        }

        try {
            const content = readFileSync(filePath);
            const ext = filePath.substring(filePath.lastIndexOf('.'));
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        } catch (e) {
            const fallback = readFileSync(join(DIST_DIR, 'index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fallback);
        }
    });

    return new Promise((resolve) => {
        server.listen(PORT, () => {
            console.log(`📡 Preview server running on http://localhost:${PORT}`);
            resolve(server);
        });
    });
}

async function prerender() {
    console.log('🚀 Starting pre-render process...\n');

    // 1. Start a local server to serve the built SPA
    const server = await startServer();

    // 2. Launch browser
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    let successCount = 0;
    let failCount = 0;

    for (const route of ALL_ROUTES) {
        try {
            const page = await browser.newPage();
            const url = `http://localhost:${PORT}${route}`;
            
            // Navigate and wait for the React app to render
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
            
            // Wait a bit more for React Helmet to inject meta tags
            await page.waitForSelector('title', { timeout: 5000 }).catch(() => {});
            await new Promise(r => setTimeout(r, 1000));

            // Get the fully rendered HTML
            let html = await page.content();

            // Clean up artifacts from local rendering
            // Remove AdSense iframes/scripts injected during local preview (they point to localhost)
            html = html.replace(/<ins class="adsbygoogle adsbygoogle-noablate"[\s\S]*?<\/ins>/g, '');
            html = html.replace(/<iframe[^>]*google[^>]*>[\s\S]*?<\/iframe>/g, '');
            html = html.replace(/<iframe[^>]*recaptcha[^>]*>[\s\S]*?<\/iframe>/g, '');
            html = html.replace(/<meta http-equiv="origin-trial"[^>]*>/g, '');
            // Remove duplicate AdSense scripts injected by the ad library
            html = html.replace(/<script src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/managed[^"]*">\s*<\/script>/g, '');

            // Write the HTML to the appropriate file
            const routePath = route === '/' ? '' : route;
            const outputDir = join(DIST_DIR, routePath);
            const outputFile = join(outputDir, 'index.html');

            if (route === '/') {
                // Overwrite the root index.html
                writeFileSync(join(DIST_DIR, 'index.html'), html);
            } else {
                // Create directory and write index.html
                mkdirSync(outputDir, { recursive: true });
                writeFileSync(outputFile, html);
            }

            // Verify the file has real content
            const hasTitle = html.includes('<title>') && !html.includes('<title></title>');
            const hasContent = html.length > 2000;
            const status = hasTitle && hasContent ? '✅' : '⚠️';
            
            console.log(`${status} ${route} → ${outputFile} (${(html.length / 1024).toFixed(1)}KB)`);
            
            if (hasTitle && hasContent) successCount++;
            else failCount++;

            await page.close();
        } catch (err) {
            console.log(`❌ ${route} → FAILED: ${err.message}`);
            failCount++;
        }
    }

    await browser.close();
    server.close();

    console.log(`\n🏁 Pre-render complete: ${successCount} success, ${failCount} failed out of ${ALL_ROUTES.length} routes`);
    
    if (failCount > 0) {
        process.exit(1);
    }
}

prerender().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
