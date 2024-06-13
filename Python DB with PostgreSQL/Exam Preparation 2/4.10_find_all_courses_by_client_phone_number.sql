CREATE OR REPLACE FUNCTION fn_courses_by_client(
	phone_num VARCHAR(20)
) RETURNS INTEGER
AS
$$
DECLARE 
	result INTEGER;
BEGIN
	result = (
	SELECT
		COUNT(co.id)
	FROM
		clients AS cl
	JOIN
		courses AS co
	ON
		cl.id = co.client_id
	WHERE 
		cl.phone_number = phone_num
	);
	RETURN result;
END;
$$
LANGUAGE PLPGSQL;
