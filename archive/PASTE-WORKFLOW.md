# Archive paste workflow

When you paste full HTML (or other code) for an archive SPA and it **cannot be used exactly**:

1. **You’ll get an explanation** of why the exact paste wasn’t used (e.g. length limits, truncation, or that the original wasn’t stored).
2. **The original (unusable) paste** is saved in the same folder as **`notfullpaste`** (e.g. `notfullpaste.html` or `notfullpaste.txt`). If the original was never saved, `notfullpaste.txt` will describe what the original contained so you can re-paste later.
3. **The main file** (e.g. `index.html`) is edited to be **as functional as possible**, with:
   - **Commented-out** sections that were omitted or broken, plus a short reason.
   - **Substitutions** where partial code was replaced, with a comment explaining what was substituted and why.

So: originals and reasons live in `notfullpaste`; the file you open (e.g. `index.html`) is the working version, with comments explaining what’s missing or changed.
