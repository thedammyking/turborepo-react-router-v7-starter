import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

// hooks are reset before each suite
afterEach(() => {
  cleanup();
});
