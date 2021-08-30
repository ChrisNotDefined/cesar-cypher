const applyTransform = (string, offset) => {
  return [...string]
  .map((char) => {
      if (char === " " || char.match(/[^\w]|\d/)) return char;

      const upperStart = (offset >= 0 ? 'A' : 'Z').charCodeAt(0);
      const lowerStart = (offset >= 0 ? 'a' : 'z').charCodeAt(0);

      const charCode = char.charCodeAt(0);

      // Upercase ACII range
      let startRange = upperStart

      if (charCode >= "a".charCodeAt(0)) {
        // Set in lowercase range
        startRange = lowerStart
      }

      const newCode = startRange + ((charCode - startRange + offset) % 26);
      return String.fromCharCode(newCode);
    })
    .join("");
};

const encrypt = (string, offset = 5) => {
  return applyTransform(string, offset);
};

const decrypt = (string, offset = 5) => {
  return applyTransform(string, offset * -1);
};

export const Cesar = {
  encrypt,
  decrypt,
};
