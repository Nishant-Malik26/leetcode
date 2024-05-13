// https://leetcode.com/problems/combine-two-tables/
// easy 


SELECT Person.firstName, Person.lastName, Address.city , Address.state from Person left join Address on  Address.personId = Person.personId