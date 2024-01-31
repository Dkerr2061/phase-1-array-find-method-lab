
function superbowlWin(arr) {
  let result;
  const found = arr.find(element => {
    return element.result === 'W'
  });
  if(found) {
    result = found['year']
  } else if(!found) {
    result = undefined;
  }
  return result;
}



