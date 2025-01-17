/*

   Use the appropriate "Object." static method to list the keys in the "footballClubs" object.
   Assign this to the "clubNames" variable.

*/

const footballClubs = {
  chelsea_fc: "England",
  fc_barcelona: "Spain",
  ac_milan: "Italy",
};

const clubNames = Object.keys(footballClubs).map((club, index) =>
  index !== 0 ? " " + club : club
);

// DO NOT EDIT BELOW THIS LINE
console.log(
  `Expected value: chelsea_fc, fc_barcelona, ac_milan. Actual value: ${clubNames}`
);
