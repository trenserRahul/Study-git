const poolOne = require("./db.js");
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
app.use(express.json());
const port = 5000;

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "crud-api-project",
    version: "1.0.0",
    description: "simple crud operation",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./index.js"],
};

const spec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.get("/", (req, res) => {
  res.send(" server is up");
});

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/setup", async (req, res) => {
  try {
    await poolOne.query(
      "CREATE TABLE schools (id SERIAL PRIMARY KEY, name VARCHAR(100) , place VARCHAR(100))"
    );
    res.status(200).send({ message: "TABLE CREATED SUCCESSFULLY" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

/**
 * @swagger
 * /post:
 *  post:
 *    summary: To post data to database .
 *    description: To post data to database.
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                     type: object
 *                     properties:
 *                        id:
 *                          type: integer
 *                        name:
 *                          type: string
 *                        place:
 *                          type: string
 *    response:
 *          200:
 *             description: Added successfully
 */

app.post("/post", async (req, res) => {
  const { name, place } = req.body;
  try {
    await poolOne.query("INSERT INTO schools (name,place) VALUES ($1,$2)", [
      name,
      place,
    ]);
    res.status(200).send({ message: "DATA INSERTED SUCCESSFULLY" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

/**
 * @swagger
 * /getDetails:
 *  get:
 *    summary: To get all details from database .
 *    description: This api is used to fetch data from db.
 *    responses:
 *        200:
 *          description: List of users.
 *          content:
 *            application/json:
 *                    schema:
 *                        type: array
 *                        items:
 *                            type: object
 *                            properties:
 *                              id:
 *                                type: integer
 *                              name:
 *                                type: string
 *                              place:
 *                                type: string
 */

app.get("/getDetails", async (req, res) => {
  const get_query = "SELECT * FROM schools";
  try {
    const data = await poolOne.query(get_query);
    res.status(200).send({ children: data.rows });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


/**
 * @swagger
 * /getData/{id}:
 *  get:
 *    summary: To get data using id .
 *    description: This api is used to fetch data using id from db.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric id required
 *          schema:
 *              type: integer
 *    responses:
 *        200:
 *          description: User detail.
 *          content:
 *            application/json:
 *                    schema:
 *                        type: array
 *                        items:
 *                            type: object
 *                            properties:
 *                              id:
 *                                type: integer
 *                              name:
 *                                type: string
 *                              place:
 *                                type: string
 */

app.get("/getData/:id", async (req, res) => {
  const id = req.params.id;
  const get_query = "SELECT * FROM schools WHERE id=$1";
  try {
    const data = await poolOne.query(get_query, [id]);
    res.status(200).send({ children: data.rows });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


/**
 * @swagger
 * /update/{id}:
 *  put:
 *    summary: To post data to database .
 *    description: To post data to database.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric id required
 *          schema:
 *              type: integer
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                     type: object
 *                     properties:
 *                        id:
 *                          type: integer
 *                        name:
 *                          type: string
 *                        place:
 *                          type: string
 *    response:
 *          200:
 *             description: Added successfully
 */

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const location = req.body.place;
  try {
    poolOne.query("UPDATE schools SET name=$1 , place=$2 WHERE id=$3", [
      name,
      location,
      id,
    ]);
    res.sendStatus(200).send({ message: "UPDATED THE TABLE" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *    summary: To delete data using id .
 *    description: This api is used to delete data using id.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Numeric id required
 *          schema:
 *              type: integer
 *    responses:
 *        200:
 *          description: User detail.
 *          content:
 *            application/json:
 *                    schema:
 *                        type: array
 *                        items:
 *                            type: object
 *                            properties:
 *                              id:
 *                                type: integer
 *                              name:
 *                                type: string
 *                              place:
 *                                type: string
 */

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const delete_query = "DELETE FROM schools WHERE id=$1";
  try {
    poolOne.query(delete_query, [id]);
    res.sendStatus(200).send({ message: "DELETED SUCCESSFULLY" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`server is up on the port in ${port}`);
});
