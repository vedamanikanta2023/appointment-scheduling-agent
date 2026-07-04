interface User{
    age:number;
}

interface User{
    name:string;
}

let user={} as User;

user.age=19;
user.name='jksdf'

export type ID = string | number;
export type Status = "success" | "error" | "pending";
export type Status2 = "success" | "error" | "pending";

// Tuples
export type Point = [x: number, y: number];

export let a : any = 'vedam';

let b: unknown = 'hello';

if(typeof b=== 'string'){
    console.log(b.toUpperCase())
}

console.log(a)

type Shape = 'circle' | 'square';

function getArea(shape: Shape) {
  if (shape === 'circle') return '...';
  if (shape === 'square') return '...';
  const _check: never = shape; // ✅ catches missing cases
}

getArea('snodf')