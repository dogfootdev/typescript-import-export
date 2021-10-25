// b.ts
import { foo, bar } from './a';
foo();
export let result = 'b.ts result : ' + bar();
