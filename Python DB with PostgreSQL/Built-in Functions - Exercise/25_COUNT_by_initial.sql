ALTER TABLE users
ADD COLUMN initials VARCHAR(2);

UPDATE users
SET initials = LEFT(first_name, 2);

SELECT
 	initials,
	COUNT(initials) AS user_count
FROM 
	users
GROUP BY initials
ORDER BY user_count DESC, initials
