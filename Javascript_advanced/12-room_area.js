let roomDimensions = {
  width: [50],
  length: [100],
  getArea: function () {
    return this.width * this.length;
  },
};
/* variable that binds the object to the getArea function */
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea());
