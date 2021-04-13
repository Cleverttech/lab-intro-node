class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((item, b) => {
      if (item < b) {
        return -1;
      } else if (item > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos] 
    }
  }

  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items.reduce(function (max, min) {
        return ( max > min ? max : min );
      });
    }
  }

  min() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items.reduce(function (max, min) {
        return ( max < min ? max : min );
      });
    }
  }

  sum() {
      return this.items.reduce(function (max, min) {
        return max + min
      }, 0 );
  
  }

  avg() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;
