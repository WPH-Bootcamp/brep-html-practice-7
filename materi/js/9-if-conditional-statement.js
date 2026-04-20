let username = "renday";

// Conditional Statement IF
// 1. if Statement
if (username === "ucup") {
  console.log("Silahkan masukkan password");
}

// 2. if/else Statement
if (username === "ucup") {
  console.log("Silahkan masukkan password");
} else {
  console.log("Username nya salahh");
}

// 3. if/else if/else Statement
if (username === "ucup") {
  console.log("Silahkan masukkan password");
} else if (username === "renday") {
  console.log("Silahkan masukkan password");
} else {
  console.log("Username nya salahh");
}

// 4. Operator Ternary -> Shortcut dari if/else Statement
const hasil =
  username === "ucup" ? "Silahkan masukkan password" : "Username nya salahh";
console.log(hasil);
