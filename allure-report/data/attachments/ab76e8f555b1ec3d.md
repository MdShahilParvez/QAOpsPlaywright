# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Calender.spec.js >> Calender validations
- Location: tests\Calender.spec.js:3:1

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
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: GREENKART
      - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e8] [cursor=pointer]:
        - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - generic [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: "Page size:"
          - combobox "Page size:" [ref=e18]:
            - option "5" [selected]
            - option "10"
            - option "20"
        - generic [ref=e19]:
          - generic [ref=e20]: "Search:"
          - searchbox "Search:" [ref=e21]
      - list "Pagination" [ref=e23]:
        - listitem:
          - button "First" [disabled]
        - listitem:
          - button "Previous" [disabled]
        - listitem [ref=e24]:
          - button "1 (current)" [ref=e25] [cursor=pointer]:
            - text: "1"
            - generic [ref=e26]: (current)
        - listitem [ref=e27]:
          - button "2" [ref=e28] [cursor=pointer]
        - listitem [ref=e29]:
          - button "3" [ref=e30] [cursor=pointer]
        - listitem [ref=e31]:
          - button "4" [ref=e32] [cursor=pointer]
        - listitem [ref=e33]:
          - button "Next" [ref=e34] [cursor=pointer]
        - listitem [ref=e35]:
          - button "Last" [ref=e36] [cursor=pointer]
    - table [ref=e37]:
      - alert [ref=e38]: "Sorted by name: descending order"
      - rowgroup [ref=e39]:
        - row [ref=e40]:
          - 'columnheader "Veg/fruit name: activate to sort column ascending" [ref=e41] [cursor=pointer]': Veg/fruit name
          - 'columnheader "Price: activate to sort column ascending" [ref=e43] [cursor=pointer]': Price
          - 'columnheader "Discount price: activate to sort column ascending" [ref=e44] [cursor=pointer]': Discount price
      - rowgroup [ref=e45]:
        - row [ref=e46]:
          - cell "Wheat" [ref=e47]
          - cell "67" [ref=e48]
          - cell "28" [ref=e49]
        - row [ref=e50]:
          - cell "Tomato" [ref=e51]
          - cell "37" [ref=e52]
          - cell "26" [ref=e53]
        - row [ref=e54]:
          - cell "Strawberry" [ref=e55]
          - cell "23" [ref=e56]
          - cell "15" [ref=e57]
        - row [ref=e58]:
          - cell "Rice" [ref=e59]
          - cell "37" [ref=e60]
          - cell "46" [ref=e61]
        - row [ref=e62]:
          - cell "Potato" [ref=e63]
          - cell "34" [ref=e64]
          - cell "22" [ref=e65]
  - generic [ref=e66]:
    - generic [ref=e67]: Delivery Date
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - generic [ref=e71]: "0"
          - spinbutton "--" [ref=e72]: "9"
          - generic [ref=e73]: /
          - generic [ref=e74]: "0"
          - spinbutton "--" [ref=e75]: "9"
          - generic [ref=e76]: /
          - spinbutton "----" [ref=e77]: "2026"
        - button [ref=e78] [cursor=pointer]
        - button [ref=e82] [cursor=pointer]
      - generic [ref=e87]:
        - generic [ref=e88]:
          - button "«" [ref=e89] [cursor=pointer]
          - button "‹" [ref=e90] [cursor=pointer]
          - button "November 2027" [ref=e91] [cursor=pointer]
          - button "›" [ref=e92] [cursor=pointer]
          - button "»" [ref=e93] [cursor=pointer]
        - generic [ref=e97]:
          - generic [ref=e98]:
            - generic [ref=e99]: Mon
            - generic [ref=e100]: Tue
            - generic [ref=e101]: Wed
            - generic [ref=e102]: Thu
            - generic [ref=e103]: Fri
            - generic [ref=e104]: Sat
            - generic [ref=e105]: Sun
          - generic [ref=e106]:
            - button "November 1, 2027" [ref=e107] [cursor=pointer]: "1"
            - button "November 2, 2027" [ref=e108] [cursor=pointer]: "2"
            - button "November 3, 2027" [ref=e109] [cursor=pointer]: "3"
            - button "November 4, 2027" [ref=e110] [cursor=pointer]: "4"
            - button "November 5, 2027" [ref=e111] [cursor=pointer]: "5"
            - button "November 6, 2027" [ref=e112] [cursor=pointer]: "6"
            - button "November 7, 2027" [ref=e113] [cursor=pointer]: "7"
            - button "November 8, 2027" [ref=e114] [cursor=pointer]: "8"
            - button "November 9, 2027" [ref=e115] [cursor=pointer]: "9"
            - button "November 10, 2027" [ref=e116] [cursor=pointer]: "10"
            - button "November 11, 2027" [ref=e117] [cursor=pointer]: "11"
            - button "November 12, 2027" [ref=e118] [cursor=pointer]: "12"
            - button "November 13, 2027" [ref=e119] [cursor=pointer]: "13"
            - button "November 14, 2027" [ref=e120] [cursor=pointer]: "14"
            - button "November 15, 2027" [ref=e121] [cursor=pointer]: "15"
            - button "November 16, 2027" [ref=e122] [cursor=pointer]: "16"
            - button "November 17, 2027" [ref=e123] [cursor=pointer]: "17"
            - button "November 18, 2027" [ref=e124] [cursor=pointer]: "18"
            - button "November 19, 2027" [ref=e125] [cursor=pointer]: "19"
            - button "November 20, 2027" [ref=e126] [cursor=pointer]: "20"
            - button "November 21, 2027" [ref=e127] [cursor=pointer]: "21"
            - button "November 22, 2027" [ref=e128] [cursor=pointer]: "22"
            - button "November 23, 2027" [ref=e129] [cursor=pointer]: "23"
            - button "November 24, 2027" [ref=e130] [cursor=pointer]: "24"
            - button "November 25, 2027" [ref=e131] [cursor=pointer]: "25"
            - button "November 26, 2027" [ref=e132] [cursor=pointer]: "26"
            - button "November 27, 2027" [ref=e133] [cursor=pointer]: "27"
            - button "November 28, 2027" [ref=e134] [cursor=pointer]: "28"
            - button "November 29, 2027" [ref=e135] [cursor=pointer]: "29"
            - button "November 30, 2027" [ref=e136] [cursor=pointer]: "30"
            - button "December 1, 2027" [ref=e137] [cursor=pointer]: "1"
            - button "December 2, 2027" [ref=e138] [cursor=pointer]: "2"
            - button "December 3, 2027" [ref=e139] [cursor=pointer]: "3"
            - button "December 4, 2027" [ref=e140] [cursor=pointer]: "4"
            - button "December 5, 2027" [ref=e141] [cursor=pointer]: "5"
```