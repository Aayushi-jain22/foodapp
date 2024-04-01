// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb://gofood:aayushi22@ac-m1uckui-shard-00-00.jmzwfb1.mongodb.net:27017,ac-m1uckui-shard-00-01.jmzwfb1.mongodb.net:27017,ac-m1uckui-shard-00-02.jmzwfb1.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-as80bz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

// const connectToMongo = async () => {
//   try {
//     mongoose.set("strictQuery", false);

//     // Wait for the connection to be established
//     const db = await mongoose.connect(mongoURI, {});
//     console.log("Mongo database connected yeahh");

//     // Access the collection once the connection is ready
//     const fetched_data = db.connection.db.collection("food_items");
//     const data = await fetched_data.find({}).toArray();
//     // const food_category = db.connection.db.collection("food_category");
//     // food_category.find({}).toArray(function (err, catData) {
//     //   if (err) console.log(err);
//     //   else {
//     //     global.food_items = data;
//     //     global.food_category = catData;
//     //   }
//     // });
//     const cat_data = db.connection.db.collection("food_category");
//     const cdata = await cat_data.find({}).toArray();

//     global.food_category = cdata;

//     console.log(global.food_items);
//   } catch (error) {
//     console.error(error);
//     process.exit();
//   }
// };

// module.exports = connectToMongo;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb://gofood:aayushi22@ac-m1uckui-shard-00-00.jmzwfb1.mongodb.net:27017,ac-m1uckui-shard-00-01.jmzwfb1.mongodb.net:27017,ac-m1uckui-shard-00-02.jmzwfb1.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-as80bz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);

    // Wait for the connection to be established
    const db = await mongoose.connect(mongoURI, {});
    console.log("Mongo database connected yeahh");

    // Access the food items collection once the connection is ready
    const foodItemsCollection = db.connection.db.collection("food_items");
    const foodItemsData = await foodItemsCollection.find({}).toArray();

    // Access the food category collection once the connection is ready
    const foodCategoryCollection = db.connection.db.collection("food_category");
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    // Assign fetched data to global variables
    global.food_items = foodItemsData;
    global.food_category = foodCategoryData;

    console.log(global.food_items);
    console.log(global.food_category);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = connectToMongo;
