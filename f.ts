// f.ts
export * from './a';
export { result } from './b';

// not work
// export meow from './c';
export { default as meow } from './c';
