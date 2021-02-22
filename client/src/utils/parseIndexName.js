const parseIndexName = (index) => {
 const parsedName = index.split("-").map(string => {
   const newFirstLetter = string[0].toUpperCase();
   const newString = string.split("");
   newString[0] = newFirstLetter
   return newString.join("")
 })
 return parsedName.join(" ")
}

export default parseIndexName
