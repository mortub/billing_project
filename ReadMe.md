# Billing Project

This project is a Full Stack project , which enables making CRUD operations on the entities of Customers and Transactions.

### Prerequisitions
You need to have [Docker](https://www.docker.com/) installed on your computer.

## How to Install

First, you need to clone or download the repository,
Then, on the project directory, type in the console:

    docker compose up

This should create the database, frontend and backend docker images and containers.

## How to Use

Now, you can go to:
https://localhost:3000
There, you can start operating on transactions and customers.
You can toggle between entitites and actions.
The possible entities are:
 **Customers** and **Transactions**.
The possible actions are:
 **Create**, **Update**, **Delete** and **Get All**.

#### Create
When creating a new Customer or Transaction, you need to provide the information required on the form.
For a new Transaction, you also have to choose the Customer that made the Transaction from the list of existent Customers.
 
 #### Update
 
When updating a Customer or Transaction, you need to choose from the list of existent Customers or Transactions the item you wish to update.

 #### Delete
 
When deleting a Customer or Transaction, you need to choose from the list of existent Customers or Transactions the item you wish to delete.

 #### Get All
 
After pressing 'Get All', you will get a table of all Customers or Transactions, according to the entity you chose.


## Project Structure

### Back End
Written in **TypeScript**, on a **Node.js** Environment.
Using the **Express.js** framework for a **REST** server.
 It has an App Router, which leads to Customer and Transaction Routers.
___
The **Customer Router** contains the following paths:

POST	/customers

    BODY:
    "first_name",
    "last_name",
    "email",
    "gender",
    "country",
    "city",
    "street",
    "phone"
 

PATCH  /customers/:id

    BODY:
    "first_name",
    "last_name",
    "email",
    "gender",
    "country",
    "city",
    "street",
    "phone"

DELETE  /customers/:id
GET  /customers
___
The **Transaction Router** contains the following paths:

POST	/transactions

    BODY:
    "total_price",
    "currency",
    "credit_card_type",
    "credit_card_number",
    "customer_id"

PATCH  /transactions/:id

    BODY:
    "total_price",
    "currency",
    "credit_card_type",
    "credit_card_number",
    "customer_id"

DELETE  /transactions/:id
GET  /transactions

___
Each Entity has a Controller file, which contains all of the methods with the business logic for the paths in the Router.
___
Each Entity has a Model file. I used Sequilize ORM in order to define the Customer and Transaction Models.

The **Customer Model** has the following attributes:
*Primary Key: id*

    id:  number;
    first_name:  string;
    last_name:  string;
    email:  string;
    gender:  GenderEnum;
    country:  string;
    city:  string;
    street:  string;
    phone:  string;



The **Transaction Model** has the following attributes:
*Primary Key: id
Foreign Key: Customer_id*

    id:  number;
    total_price:  number;
    currency:  string;
    credit_card_type:  string;
    credit_card_number:  number;
    customer_id:  string;

The Database is of type SQLite,  and its instance is locally initialized upon `docker compose up`.

___
There is also a Utils directory, which contains all of the DTO and Enum definitions and Validator files.

### Front End
Written in **TypeScript**, with a **React** framework.
It has an App Component, which leads to all other Components in the Application:

* **EntityToggle:** 
A selection list that allows to choose between Customers and Transactions.
* **ActionToggle:** 
A selection list that allows to choose between Create, Update, Delete and Get All.
* **EntityForm:** 
A form appearing when creating/updating an entity.
* **EntitySelectList:** 
A selection list appearing when updating/deleting an entity.
* **EntitySelectList:** 
A selection list appearing when updating/deleting an entity.
* **EntityList:** 
A table list appearing when getting all entities.
* **ActionButton:** 
A button with the action to make, changes according to the ActionToggle.
___
The State of the app is being provided via a shared context, using the React Context API.
It is defined in the AppContext and AppReducer files.
___
The calls to the Back End are made in the ApiService file, and are fired from the ActionButton upon user click. The Entity, Action and body of the request (if exist) are determined by the context.
___
The project also has a @types directory, containing all of the different definitions for types, constants, enums etc...

## Explanation for Choices Made
### Back End:
* **DATABASE** : I chose to use a relational database because I think the entities - Customers and Transactions - need to have a strong relationship between them. A Transaction belongs to a Customer, and a Customer has many Transactions. It makes sense that later we will be able to get all Transactions of a Customer easily. Also, the consistency of the data is very important since it is a financial information. Relational databases are known for their data consistency. I chose SQLite since this is a small project, without much data. For a more scalable approach I would have chosen MySQL or PostgreSQL.
* **ORM** : I chose to use an ORM because it seemed like a less bug-prune, simpler way to make requests to the database.
### Front End:
* **Context API** : I chose to use the Context API of React since this is a small project, not meant to scale. For a bigger project I would have integrated a state management framework like Redux or Mobax.
* **Components**: I chose to have components like a general form and a general button in order to have anabstract structure to build upon, and to implement the DRY principle.

## Features to  Add
Given more time, and if I had to make a more scalable application, I would have implemented the following:
### Back End:
* Pagination, providing a limited number of items for the request of "get all".
* Authentication and authorization, so that only registered customers can manipulate data, and that only authorized customers will be able to change their own transactions.
* Unit tests, mainly for the Controller files.
* A database on a cloud provider, such as RDS on AWS.

### Front End:
* Prompt before deleting/updating an item, asking 'Are you sure?'.
* A message to the user upon create/delete/update, so he will know if the actionwas done successfully or not.
* Unit tests, mainly for the Component files.
* A more robust state management framework like Redux or Mobax.
* Infinite scroll with virtualization for the entities lists.

