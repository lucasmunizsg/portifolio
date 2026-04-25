import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockMatchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: mockMatchMedia,
  });
  
  if (window.document && window.document.defaultView) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.document.defaultView as any).matchMedia = mockMatchMedia;
  }
}

if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).matchMedia = mockMatchMedia;
}

