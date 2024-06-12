SELECT
	a.name AS animal,
	EXTRACT(YEAR FROM a.birthdate) AS birth_year,
	at.animal_type
FROM
	animals AS a
JOIN 
	animal_types AS at
ON 
	a.animal_type_id = at.id
WHERE
	owner_id IS NULL AND animal_type <> 'Birds' AND a.birthdate > '2016-12-31'
ORDER BY
	name
	
