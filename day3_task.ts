// File: day3_task.ts
// Folder Name: Week2_Day3_Work

// 1. Primitive Type Annotations
let developerName: string = "Noor Zahid";
let totalTasks: number = 5;
let isCompleted: boolean = false;

// 2. Special Types
let optionalNote: string | null = null;

// 3. Typed Arrays
let skillList: string[] = ["JavaScript", "TypeScript", "FastAPI"];

// 4. Object Schema Definition (Union Type & Optional Property)
let userProfile: {
  id: number | string;
  username: string;
  role: string;
  isActive?: boolean;
} = {
  id: "USR-102",
  username: "noor_zahid",
  role: "Junior Software Engineer",
  isActive: true
};

// 5. Union Types Function Example
function formatID(id: string | number): string {
  if (typeof id === "number") {
    return `ID-00${id}`;
  }
  return id.toUpperCase();
}

console.log(`Developer: ${developerName}`);
console.log(formatID(101));       // Output: ID-00101
console.log(formatID("usr-505")); // Output: USR-505