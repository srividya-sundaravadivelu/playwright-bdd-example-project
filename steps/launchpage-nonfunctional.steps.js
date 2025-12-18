import { expect } from "@playwright/test";
import { Then } from "../fixtures/fixtures";
import AxeBuilder from "@axe-core/playwright";

Then('Page should be fully loaded within {int} seconds', async ({ page }, maxSeconds) => {
    // Step: Then Page should be fully loaded within 3 seconds
    // From: features\homepage-nonfunctional.feature:7:5
    const start = Date.now();
    await page.goto('/FirstPage', { waitUntil: 'load' });
    const end = Date.now();

    const loadTime = (end - start) / 1000;
    console.log(`Page load time: ${loadTime} seconds`);

    expect(loadTime, `Page should load within ${maxSeconds} seconds`).toBeLessThanOrEqual(maxSeconds);
});

Then('All major sections are accessible with appropriate labels and alt texts', async ({ page }) => {

    const axeResults = await new AxeBuilder({ page }).analyze();

    const importantViolations = (axeResults.violations || []).filter(v =>
        ['critical', 'serious'].includes(v.impact)
    );

    if (importantViolations.length) {
        console.log(`Found ${importantViolations.length} critical/serious accessibility violations:\n`);
        importantViolations.forEach(v => {
            console.log(`Rule: ${v.id} (${v.impact})`);
            console.log(`Description: ${v.description}`);
            console.log(`Help URL: ${v.helpUrl}`);
            v.nodes.forEach(n => console.log(`  Target: ${n.target.join(', ')}\n  Failure: ${n.failureSummary}`));
            console.log('---');
        });
    }

    // Fail test if any critical/serious violations found
    expect(importantViolations.length,
        `Found ${importantViolations.length} critical/serious accessibility violations. Check console for details.`).toBe(0);
});
