# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.js >> Browser context Playwright test
- Location: tests\UIBasicstest.spec.js:4:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[style*=\'block\']')
Expected substring: "Incorrect"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('[style*=\'block\']') with timeout 5000ms
  - waiting for locator('[style*=\'block\']')

```

```yaml
- link "Free Access to InterviewQues/ResumeAssistance/Material":
  - /url: https://rahulshettyacademy.com/documents-request
- link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
  - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
- heading [level=3]:
  - img
- text: "Username:"
- textbox "Username:": rahul shetty
- text: "Password:"
- textbox "Password:": learning
- text: Admin
- radio "Admin" [checked]
- text: User
- radio "User"
- combobox:
  - option "Student" [selected]
  - option "Teacher"
  - option "Consultant"
- checkbox "I Agree to the terms and conditions"
- text: I Agree to the
- link "terms and conditions":
  - /url: "#"
- button "Sign In"
- paragraph: (username is rahulshettyacademy and Password is Learning@830$3mK2)
```

```
Fixture "trace recording" timeout of 30000ms exceeded during teardown.
```