# mini-icons

**mini-icons** is a tiny, easy-to-use npm package that provides free, beautiful SVG icons as React components. Import individual icons directly for minimal bundle size and maximum flexibility.

---

## Features

- ✅ Free and open-source SVG icons  
- ✅ Easy React component imports (`import Google from 'mini-icons/Google'`)  
- ✅ Tiny and optimized for performance  
- ✅ Uses [SVGR](https://react-svgr.com/) generated React components  
- ✅ Supports tree-shaking with ES module exports  
- ✅ Perfect for Next.js, React, and any React-based projects  

---

## Installation

```bash
npm install mini-icons
# or
yarn add mini-icons
```
---

## Usage

Import icons individually as React components:

**Note**: Icons accept standard SVG props like className, width, height, fill, stroke, etc.

```jsx
import Barchart from 'mini-icons/Barchart';

export default function Example() {
  return (
    <div className="flex space-x-4 text-blue-600">
      {/* You can pass standard SVG props like className, width, height, fill */}
      <Barchart className="w-6 h-6" fill="currentColor" />
      <Barchart width={48} height={48} fill="#4A90E2" />
    </div>
  );
}
```

---

## License
MIT

---

## Issues
If you encounter any issues or have feature requests, please open an issue on our [GitHub repository](https://PatelAbhay550.com/yourusername/mini-icons/issues).

---
## Contributing
We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.
