CREATE OR REPLACE FUNCTION fn_get_volunteers_count_from_department(
	searched_volunteers_department VARCHAR(30)
) RETURNS INT
AS
$$
DECLARE
	volunteers_count_per_department INT;
BEGIN
	volunteers_count_per_department = (
	SELECT
		COUNT(v.id)
	FROM
		volunteers AS v
	JOIN
		volunteers_departments AS vd
	ON
		v.department_id = vd.id
	WHERE 
		department_name = searched_volunteers_department
	);
	RETURN volunteers_count_per_department;
END;
$$
LANGUAGE PLPGSQL;
