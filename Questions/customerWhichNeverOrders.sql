# https://leetcode.com/problems/customers-who-never-order/
# easy
SELECT Customers.name as Customers from Customers left join Orders on Customers.id = Orders.customerId WHERE Orders.customerId IS NULL;
