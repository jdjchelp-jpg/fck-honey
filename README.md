# fck-honey
Open source lib for Merchants to detect if an end user has Honey browser extension installed

## Inspiration
[MegaLag exposed Honey as a scam](https://www.youtube.com/watch?v=wwB3FmbcC88)

## Usage (Browser Global)

```html
<script src="https://cdn.jsdelivr.net/npm/fck-honey/dist/honey-detect.min.js"></script>
<script>
  window.fckHoney.listen((el) => {
    // Decide how you want to handle this.
    // Example: pause checkout and notify the user.
    console.log("Honey overlay detected:", el);
  });
</script>
```

## Usage (ESM)

```sh
npm install fck-honey
```

```js
import { listen } from "fck-honey";

listen((el) => {
  // Decide how you want to handle this.
  // Example: pause checkout and notify the user.
  console.log("Honey overlay detected:", el);
});
```

## Advanced Options

```js
window.fckHoney.listen((el, warn) => {
  // Optional: the element is removed automatically by default.
  // warn() shows a built-in overlay message (returns a hide function).
  warn("You must disable the Honey extension to continue.");
}, { removeHoney: true });
```
