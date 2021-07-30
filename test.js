let newarr = [];
function getEven() {
  for(let z=1; z<=50; z++){
    if(z % 2 === 0) {
      newarr.push(z)
    }
  }
  return newarr;
}
getEven();
