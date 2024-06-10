CREATE PROCEDURE sp_increase_salary_by_id(id INT)
AS
$$
BEGIN
	IF 
		(SELECT COUNT(employee_id) FROM employees WHERE employee_id = id) <> 1 THEN
	ROLLBACK;
	ELSE 
		UPDATE employees
			SET salary = salary * 1.05 WHERE employee_id = id;
	END IF;
COMMIT;
END;
$$
LANGUAGE plpgsql;
