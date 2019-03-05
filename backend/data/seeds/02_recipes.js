
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, name: 'Fluffy Pancakes', image: 'https://images.media-allrecipes.com/userphotos/720x405/5079227.jpg', link: 'https://www.allrecipes.com/recipe/162760/fluffy-pancakes/?internalSource=hub%20recipe&referringId=78&referringContentType=Recipe%20Hub'},
        {recipe_id: 2, name: "Virginia's Tuna Salad", image: 'https://images.media-allrecipes.com/userphotos/600x600/44694.jpg', link: 'https://www.allrecipes.com/recipe/20185/virginas-tuna-salad/?internalSource=staff%20pick&referringId=17561&referringContentType=Recipe%20Hub'},
        {recipe_id: 3, name: 'Spaghetti alla Carbonara', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/23/0/LR0301-1_Spaghetti-alla-Carbonara_s4x3.jpg.rend.hgtvcom.406.305.suffix/1383163803923.jpeg', link: 'https://www.foodnetwork.com/recipes/tyler-florence/spaghetti-alla-carbonara-recipe-1914140'}
      ]);
    });
};