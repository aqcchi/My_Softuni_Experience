CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not(
	IN animal_name VARCHAR(30),
	OUT result VARCHAR
)
AS
$$

BEGIN

	result := (
		SELECT
			o.name
		FROM
 			animals AS a
		JOIN 
			owners AS o
		ON
			a.owner_id = o.id
		WHERE
			a.name = animal_name
		);

	IF result IS NULL THEN result := 'For adoption';

	END IF;

END;
$$
LANGUAGE PLPGSQL;
