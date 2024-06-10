CREATE OR REPLACE FUNCTION fn_full_name(
	first_name VARCHAR(20),
	last_name VARCHAR(20)
	)
RETURNS VARCHAR
AS
$$
	DECLARE 
		full_name VARCHAR;
BEGIN
	full_name := INITCAP(LOWER(first_name)) || ' ' || INITCAP(LOWER(last_name));
	RETURN full_name;
END;
$$
LANGUAGE PLPGSQL
