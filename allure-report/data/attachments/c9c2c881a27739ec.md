# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NetworkTest2.spec.js >> Security Test request Intercept
- Location: tests\NetworkTest2.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.blink_me')
Expected: "You are not authorize to view this order"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.blink_me') with timeout 5000ms
  - waiting for locator('.blink_me')

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```