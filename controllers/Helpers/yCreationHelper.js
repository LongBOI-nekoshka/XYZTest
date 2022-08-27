const createY = (size = 0) => {
  if(size % 2 == 0 || size <= 1) {
    size = 3;
  }
  let figure = ''
  let midpoint = (size - 1) /2
  for(let y = 0; y < size; y++) {
    for(let x = 0; x < size; x++) {
      if(y < midpoint) {
        if(x == y || x == (size - 1) - y) {
          if(x == size - 1) {
            figure+='O\n';
          }else {
            figure+='O';
          }
        }else {
          if(x == size - 1 && y != size -1) {
            figure += ' \n'
          }else {
            figure += ' '
          }
        }
      }else {
        if(x == midpoint) {
          figure+='O';
        }else {
          if(x == size - 1 && y != size -1) {
            figure += ' \n'
          }else {
            figure += ' '
          }
        }
      }
    }
  }
  return figure;
}

export default createY;