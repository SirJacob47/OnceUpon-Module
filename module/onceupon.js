import { OnceUponActorSheet } from "./sheets/onceupon-character-sheet.js";

Hooks.once("init", async function () {
  console.log("Once Upon Module | Initializing");

  Actors.registerSheet("onceupon", OnceUponActorSheet, {
    types: ["character"],
    makeDefault: true
  });
});
