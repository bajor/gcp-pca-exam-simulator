import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.open = true;
    this.querySelector<HTMLElement>("button")?.focus();
  };
}
if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function close() {
    this.open = false;
  };
}

// jsdom has no matchMedia; every query reports no match unless a test overrides it.
if (!window.matchMedia) {
  window.matchMedia = (media: string) => ({
    matches: false,
    media,
    onchange: null,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => false,
  });
}

afterEach(cleanup);
