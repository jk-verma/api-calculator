# API Calculator

Browser-based IIFT API calculator prepared from the provided scoring method and workbook logic.

Files:
- `index.html`: single-page web application.
- `styles.css`: application styling.
- `app.js`: scoring logic and live calculations.
- `API Calculator Sheet - IIFT.xlsx`: reference workbook version.

Usage:
1. Open `index.html` in a browser.
2. Add rows for each category as needed.
3. Enter course details, duties, and research activity.
4. Read live totals from the summary cards and section totals.

Template-guided dynamic features:
- Policy selector with all designation levels shown on the template dashboard.
- Designation-aware threshold display based on the template lookup sheet.
- Explicit handling of template gaps where threshold rows are not populated.
- Category 1 is evaluated for the selected academic year only.
- Category 2 and Category 3 are evaluated over the rolling 4-year assessment period ending in the academic year derived from the date of eligibility.
- Academic year is derived using the template assumption of `1 July - 30 June`.

Workbook formula source:
- The uploaded workbook contains `Dashboard`, `Lookup`, and `Template` sheets.
- The web app logic mirrors the formulas captured from the template-driven workbook, including:
  - direct teaching total course hours and API
  - question paper setting and answer script evaluation from course count
  - manual examination score from entered hours
  - innovative teaching from one-third of course hours
  - Category 2 lookups from the lookup tables
  - Category 3 point lookup from the lookup tables

Workbook note:
- The uploaded workbook is inconsistent about the second policy name:
  - `Dashboard` shows `IPS-2022`
  - `Lookup` shows `IPS-2020`
- The app currently follows the lookup sheet naming, `IPS-2020`, because the threshold table lives there.
