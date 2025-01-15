# Dialpad TypeScript SDK

An unofficial, modern TypeScript SDK for [Dialpad](https://dialpad.com/).
Inspired by Dialpad’s [Python SDK](https://developers.dialpad.com/docs/python-sdk).

## Features

- Full coverage of Dialpad’s REST API:
  - Users, Offices, Departments, Call Centers, Calls, SMS, Webhooks, etc.
- Thoroughly typed with TypeScript
- Optional runtime validation using [Zod](https://zod.dev)
- Built on [Axios](https://axios-http.com/) for robust HTTP requests
- Integrates seamlessly into Node.js or modern front-end bundlers

## Installation

```bash
npm install dialpad-typescript-sdk
# or
yarn add dialpad-typescript-sdk
```

## Usage

```ts
import { DialpadClient } from 'dialpad-typescript-sdk';

// 1) Create a client with your API Token
const client = new DialpadClient('YOUR_TOKEN', {
  environment: 'live', // 'sandbox' or 'live'
  companyId: '12345',  // If you have a default company
});

// 2) Access resources
async function demo() {
  // Get the company object
  const company = await client.company.get();
  console.log('company', company);

  // Create a contact
  const newContact = await client.contact.create({
    first_name: 'John',
    last_name: 'Doe',
    emails: ['john@example.com'],
  });

  // Send an SMS
  const smsResult = await client.sms.sendSms(
    101, // userId
    ['+12223334444'],
    'Hello from TypeScript!'
  );
  console.log('SMS result', smsResult);
}

demo().catch(console.error);
```

## Configuration

- **environment**: `'sandbox'` (default) or `'live'`
- **baseUrl**: override the default host with your own (for mocking or internal testing).
- **companyId**: sets a global header `DP-Company-ID` for all requests.

## Zod Validation

We’ve added minimal Zod usage in places like AppSettings, but you can expand it to cover more of the request/response shapes if desired.

## Development

1. Clone the repo
2. `npm install`
3. `npm run build` to compile TypeScript to `dist/`
4. `npm run test` to run unit tests with [Vitest](https://vitest.dev/)

Feel free to file PRs or issues for improvements!
