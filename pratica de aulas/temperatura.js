const count = perseInt(readline());
let temps = readline().split(" ");

let tempsSorted = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);

console.log(tempsSorted);

console.log(tempsSorted[0] || 0);




=============================================================
function closestToZero(ts) {
  if(!ts || ts.length){
    return 0;
  }
  return ts.reduce((masCercano, temp) => {
    return ts.Math.abs(temp) < Math.abs(masCercano) ? temp : Math.abs(temp) === Math.abs(masCercano) ? Math.abs(masCercano) : masCercano;

  },ts[0])
}