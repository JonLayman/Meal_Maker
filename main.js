var menu = {
  courses: {
    appetizers:[] ,
    mains: [],
    desserts: [] ,

  },
   addDishToCourse:  function(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    };
    this.courses[courseName].push(dish);
    var dish = {
      name: dishName,
      price: dishPrice
    }
  },
  getRandomDishFromCourse: function(courseName) {
    var dishes = this.courses[courseName];
    var randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
 var appetizers = this.getRandomDishFromCourse('appetizers');
 var mains = this.getRandomDishFromCourse('mains');
 var desserts = this.getRandomDishFromCourse('desserts');
 var totalPrice = appetizers.price + mains.price + desserts.price;
 return (`Appetizer: ${appetizers.name}, Main: ${mains.name}, Dessert: ${desserts.name} Total Price: ${totalPrice.toFixed(2)}`);
}
};

menu.addDishToCourse('mains', 'steak', 35.99);
menu.addDishToCourse('mains', 'salad', 12.99);
menu.addDishToCourse('mains', 'fish', 25.99);
menu.addDishToCourse('appetizers', 'artichoke dip', 8.99);
menu.addDishToCourse('appetizers', 'corn bread', 5.99);
menu.addDishToCourse('appetizers', 'creamy queso', 14.99);
menu.addDishToCourse('desserts', 'cake', 4.99);
menu.addDishToCourse('desserts', 'rice pudding', 2.99);
menu.addDishToCourse('desserts', 'cherry pie', 5.99);
console.log(menu);
var meal = menu.generateRandomMeal();
console.log(meal);
