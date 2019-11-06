# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName 
FROM products AS p 
JOIN categories as c 
ON p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName 
FROM orders as o 
JOIN shippers as s 
ON o.ShipperID = s.ShipperID 
WHERE o.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT 
o.Quantity, p.ProductName 
FROM OrderDetails as o 
JOIN Products as p 
ON o.ProductID = p.ProductID 
WHERE o.OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 