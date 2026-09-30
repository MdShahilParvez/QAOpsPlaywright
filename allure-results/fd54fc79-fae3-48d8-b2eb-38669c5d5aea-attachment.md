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
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - heading "Your Orders" [level=1] [ref=e27]
    - table [ref=e28]:
      - rowgroup [ref=e29]:
        - row [ref=e30]:
          - columnheader "Order Id" [ref=e31]
          - columnheader "Product Image" [ref=e32]
          - columnheader "Name" [ref=e33]
          - columnheader "Price" [ref=e34]
          - columnheader "Ordered Date" [ref=e35]
          - columnheader "View" [ref=e36]
          - columnheader "Delete" [ref=e37]
      - rowgroup [ref=e38]:
        - row [ref=e39]:
          - rowheader "6aa0e409e7cd69710fcb5d67" [ref=e40]
          - cell [ref=e41]
          - cell "ADIDAS ORIGINAL" [ref=e43]
          - cell "$ 11500" [ref=e44]
          - cell "Wed Sep 09" [ref=e45]
          - cell [ref=e46]:
            - button "View" [ref=e47] [cursor=pointer]
          - cell [ref=e48]:
            - button "Delete" [ref=e49] [cursor=pointer]
        - row [ref=e50]:
          - rowheader "6aa0e3f8e7cd69710fcb5d3f" [ref=e51]
          - cell [ref=e52]
          - cell "ADIDAS ORIGINAL" [ref=e54]
          - cell "$ 11500" [ref=e55]
          - cell "Wed Sep 09" [ref=e56]
          - cell [ref=e57]:
            - button "View" [ref=e58] [cursor=pointer]
          - cell [ref=e59]:
            - button "Delete" [ref=e60] [cursor=pointer]
        - row [ref=e61]:
          - rowheader "6aa0da50e7cd69710fcb4ef7" [ref=e62]
          - cell [ref=e63]
          - cell "ADIDAS ORIGINAL" [ref=e65]
          - cell "$ 11500" [ref=e66]
          - cell "Wed Sep 09" [ref=e67]
          - cell [ref=e68]:
            - button "View" [ref=e69] [cursor=pointer]
          - cell [ref=e70]:
            - button "Delete" [ref=e71] [cursor=pointer]
        - row [ref=e72]:
          - rowheader "6aa0da30e7cd69710fcb4e97" [ref=e73]
          - cell [ref=e74]
          - cell "ADIDAS ORIGINAL" [ref=e76]
          - cell "$ 11500" [ref=e77]
          - cell "Wed Sep 09" [ref=e78]
          - cell [ref=e79]:
            - button "View" [ref=e80] [cursor=pointer]
          - cell [ref=e81]:
            - button "Delete" [ref=e82] [cursor=pointer]
        - row [ref=e83]:
          - rowheader "6aa0da1ce7cd69710fcb4e61" [ref=e84]
          - cell [ref=e85]
          - cell "ADIDAS ORIGINAL" [ref=e87]
          - cell "$ 11500" [ref=e88]
          - cell "Wed Sep 09" [ref=e89]
          - cell [ref=e90]:
            - button "View" [ref=e91] [cursor=pointer]
          - cell [ref=e92]:
            - button "Delete" [ref=e93] [cursor=pointer]
        - row [ref=e94]:
          - rowheader "6aa0d9f4e7cd69710fcb4df1" [ref=e95]
          - cell [ref=e96]
          - cell "ADIDAS ORIGINAL" [ref=e98]
          - cell "$ 11500" [ref=e99]
          - cell "Wed Sep 09" [ref=e100]
          - cell [ref=e101]:
            - button "View" [ref=e102] [cursor=pointer]
          - cell [ref=e103]:
            - button "Delete" [ref=e104] [cursor=pointer]
    - generic [ref=e105]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e107]:
    - button "Go Back to Shop" [ref=e108] [cursor=pointer]
    - button "Go Back to Cart" [ref=e109] [cursor=pointer]
```