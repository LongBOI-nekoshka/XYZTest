const createZ = (size = 0) => {
  if(size % 2 == 0 || size <= 1) {
    size = 3;
  }
  let figure = ''
  for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
      if(y==0 || y == size-1 ) {
        if(x == size - 1 && y != size -1) {
          figure+='O\n';
        }else {
          figure+='O';
        }
      }else {
        if(x == (size - 1) - y) {
          figure+='O'
        }
        if(x == size - 1 && y != size -1) {
          figure += '\n'
        }else {
          figure += ' '
        }
      }
    }
  }
  return figure;
}

export default createZ;