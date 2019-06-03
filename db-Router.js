const express = require('express');

const Dishes = require('./data/db.js');

const router = express.Router();

router.use(express.json());
// router.use(cors())

//Endpoints
// By time we get here  the url already has /api/db because its in server.use in server.js.
router.get('/', async (req, res) => {
    try { // try is like "if"
      const dishes = await Dishes.getDishes(req.query); // if you know this will never fail, get rid of the try. This is passing the dishes.find function in db.
      res.status(200).json(dishes);
    } catch (error) { // catch is like else
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dishes',
      });
    }
  });
  
router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    if (!dish.length) {
      res.status(404).json({ message: 'The dish with the specified ID does not exist.' });
    } else {
      res.status(200).json(dish);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'The dish information could not be retrieved.',
    });
  }
});

router.post('/', async (req, res) => {
    if(req.body.name){
        try {
            const dish = await Dishes.addDish(req.body);
            res.status(201).json(dish);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error while saving the dish to the database.',
            });
          }
    } else {
        res.status(400).json({
            errorMessage: "Please provide content for the dish"
        })
    }
});

router.get('/:id/recipe', async (req, res) => {
    try { // try is like "if"
      const dishes = await Dishes.getRecipes(req.query); // if you know this will never fail, get rid of the try. This is passing the Dishes.find function in db.
      res.status(200).json(dishes);
    } catch (error) { // catch is like else
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dishes',
      });
    }
  });

router.post('/:id/recipe', async (req, res) => {
if(req.body.name){
    try {
        const recipe = await Dishes.addRecipe(req.body);
        res.status(201).json(recipe);
        } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while saving the recipe to the database.',
        });
        }
} else {
    res.status(400).json({
        errorMessage: "Please provide content for the recipe"
    })
}
});

// router.delete('/:id', async (req, res) => {
//   try {
//     const count = await Dishes.remove(req.params.id);
//     if (count > 0) {
//       res.status(200).json({ message: 'The dish has been destroyed to oblivion' });
//     } else {
//       res.status(404).json({ message: 'The dish with the specified ID does not exist.' });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'The dish could not be removed',
//     });
//   }
// });

// router.put('/:id', async (req, res) => {

//     if(req.body.title && req.body.contents){
//         try {
//             const dish = await Dishes.update(req.params.id, req.body);
//             if (dish) {
//               res.status(200).json(dish);
//             } else {
//               res.status(404).json({ message: 'The dish with the specified ID does not exist.' });
//             }
//           } catch (error) {
//             console.log(error);
//             res.status(500).json({
//               message: 'The dish information could not be modified.',
//             });
//           }
//     } else {
//         res.status(400).json({
//             errorMessage: "Please provide title and content for the dish"
//         })
//     }


// });

module.exports = router;
