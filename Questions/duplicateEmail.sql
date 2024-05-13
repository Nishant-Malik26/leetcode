# https://leetcode.com/problems/duplicate-emails/
# easy


SELECT email from Person
group by email
having count(email) > 1;