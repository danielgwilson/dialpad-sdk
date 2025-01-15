# 🎭 Dialpad TypeScript SDK: Because Someone Had To Do It

## The Story

State of the world: be you, a dev trying to integrate Dialpad's API. You check their docs, hoping to find a nice, modern TypeScript SDK. But alas! All you find is a Python SDK that looks like it was written during the Obama administration.

## Enter This Project

Since Dialpad was too busy building AI features nobody asked for (just kidding, love you Dialpad please don't ban me 😘), we decided to take matters into our own hands and build the TypeScript SDK they never got around to making.

### Features That Dialpad Should Have Given Us Years Ago

- 🎯 **Full TypeScript Support**: Because we live in 2025, not 2015
- 🧪 **Modern Testing**: With Vitest, because life's too short for Jest
- 📚 **Actually Good Documentation**: With examples that don't make you want to cry
- 🔒 **Type Safety**: Because `any` is not a personality trait
- 🎨 **Clean Architecture**: Following best practices Dialpad's Python SDK only dreams of
- 🚀 **Promise-based API**: No callbacks in sight (looking at you, Python SDK)

## Why This Exists

1. Because waiting for Dialpad to make their own TypeScript SDK felt like waiting for Half-Life 3
2. Because converting Python examples to TypeScript manually is about as fun as a root canal
3. Because we believe in the radical idea that TypeScript developers deserve nice things too

## The Real MVP

Shoutout to Dialpad's API documentation team—you're the real MVPs. We couldn't have built this without your docs. Now if we could just convince your engineering team to maintain an official TypeScript SDK... 😉

## Installation

```bash
npm install @legion/dialpad-sdk
```

## Usage

```typescript
import { DialpadClient } from '@legion/dialpad-sdk';
const client = new DialpadClient('YOUR_TOKEN', {
environment: 'live', // or 'sandbox' if you're feeling cautious
companyId: '12345' // optional, like Dialpad's commitment to TypeScript
});
// Look ma, no Python! 🐍❌
const company = await client.company.get();
```

## Contributing

PRs welcome! Unless you're from Dialpad, in which case we'd prefer you just make an official SDK instead 😅

## License

MIT - Because we're nicer than the companies that make you read 20 pages of legal text.

---

> *Built with ❤️ and mild sass by Daniel G Wilson—a developer who got tired of waiting for something better than naked REST.*
