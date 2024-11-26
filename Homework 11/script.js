// #HmvAfRQM
// const list = document.createElement('ul');
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(({carts}) => {
//        const block = document.createElement('div')
//         document.body.append(block)
//         console.log(carts)
//         for (let cart of carts){
//          const firstPar = document.createElement('p')
//          const secondPar =    document.createElement('div')
//             block.append(firstPar, secondPar)
//             firstPar.innerText = `Cart ID: ${cart.id}, Discounted Total: ${cart.discountedTotal}, Total: ${cart.total}, Total Products: ${cart.totalProducts}, Total Quantity: ${cart.totalQuantity}, User ID: ${cart.userId}`;
//             for (let product of cart.products) {
//                 const productPar = document.createElement('p'); // Новий <p> для кожного продукту
//                 productPar.innerText = `Product ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Quantity: ${product.quantity}, Total: ${product.total}`;
//                 secondPar.append(productPar);
//             }
//         }
//     });

// fetch('https://dummyjson.com/recipes')
//     .then(value => value.json())
//     .then(({recipes}) => {
//         for (const recipe of recipes) {
//             console.log(recipe)
//             const block = document.createElement('div')
//             document.body.append(block);
//             const paragraph = document.createElement('p');
//             paragraph.textContent = `Name of dishes: ${recipe.name}, time preparing: ${recipe.prepTimeMinutes}, rate: ${recipe.rating}, review: ${recipe.reviewCount}, servings: ${recipe.servings}, time cooking: ${recipe.cookTimeMinutes}, cuisine: ${recipe.cuisine}, difficulty:  ${recipe.difficulty}, id ${recipe.id}, user ID: ${recipe.userId
//             }, cookTimeMinutes: ${recipe.cookTimeMinutes}, cuisine: ${recipe.cuisine} `
//             const img = document.createElement('img');
//             img.src = recipe.image
//             const listIngridients = document.createElement('ul');
//             listIngridients.textContent = 'Ingridients';
//             for (let ingridient of recipe.ingredients) {
//                 const ingridientItem = document.createElement('li');
//                 ingridientItem.textContent = ingridient;
//                 listIngridients.append(ingridientItem);
//             }
//             const instructionsList = document.createElement('ul');
//             instructionsList.textContent = 'Instructions';
//             for (let instr of recipe.instructions) {
//                 const instructionItem = document.createElement('li');
//                 instructionItem.textContent = instr;
//                 instructionsList.append(instructionItem);
//             }
//             const mealTypeList = document.createElement('ul');
//             mealTypeList.textContent = 'Meal Type';
//             for (let type of recipe.mealType) {
//                 const typeMeal = document.createElement('li');
//                 typeMeal.textContent = type;
//                 mealTypeList.append(typeMeal);
//             }
//             block.append(paragraph, img, listIngridients, instructionsList, mealTypeList);
//         }
//
//     })