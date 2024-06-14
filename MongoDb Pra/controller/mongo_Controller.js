// mongo_Controller.js
const { MongoClient } = require("mongodb");

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const mongoDbpractice = async (req, res) => {
  const agg = [
    {
      $project: {
        cart_user: 1,
        total_price: 1,
        products: 1,
      },
    },
    {
      $unwind: {
        path: "$products",
      },
    },
  ];

  const client = await MongoClient.connect('mongodb+srv://rahuln:HTV5MiJqrFO5ytZh@cluster0.zwjsixq.mongodb.net/');
  const coll = client.db("ecommerce").collection("cartModel");
  const cursor = coll.aggregate(agg);
  const result = await cursor.toArray();
  console.log(result);
  await client.close();
};
module.exports = {
  mongoDbpractice,
};
// const pipeline = [
//   {
//     $match: {
//       "imdb.rating": { $gte: rating },
//     },
//   },
//   {
//     $match: {
//       "year": { $lte: 2000 },
//     },
//   },
//   {
//     $project: {
//       title: 1,
//       "imdb.rating": 1,
//       year: 1,
//     },
//   },
//   {
//     $sort: {
//       "imdb.rating": -1,
//     },
//   },
//   {
//     $limit:2
//   }

// ];

// const movies = await collection.aggregate(pipeline).toArray();

// if (!movies || movies.length === 0) {
//   return res
//     .status(404)
//     .json({ error: "No movies found with the specified rating" });
// }

// res.json(movies);

// ---------------------------------------------------------------
/** Which movies has highest commments** /
 * 
/* testing */
// const mongoDbRatingFilter = async (req, res) => {
//   try {
//     const rating = parseFloat(req.params.rating);
//     const db = mongoose.connection.db;
//     if (!db) {
//       throw new Error('Database connection is not open');
//     }

//     const collection = db.collection('movies');

//     const pipeline = [
//       {
//         $match: {
//           "imdb.rating": { $gte: rating }
//         }
//       },
//       {
//         $project: {
//           title: 1,
//           "imdb.rating": 1
//         }
//       },
//       {
//         $sort: {
//           "imdb.rating": -1
//         }
//       }
//     ];

//     const movies = await collection.aggregate(pipeline).toArray();

//     if (!movies || movies.length === 0) {
//       return res.status(404).json({ error: 'No movies found with the specified rating' });
//     }

//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   mongoDbpractice,
//   mongoDbRatingFilter
// };

// i have two collections

// userModel and cartModel

// userModel field
// _id,
// username,
// email,
// password,
// isVerified,
// role

// cartModel field

// products:[
//     _id,
//     product_id,
//     quantity,
//     price
// ],
// cart_user,
// total_price

// now i want to find that which user have total no. of prtoducts in cart available
// with the user username how can i ??
