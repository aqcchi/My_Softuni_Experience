SELECT
	LTRIM(peak_name, 'M') AS left_side,
	RTRIM(peak_name, 'm') AS right_side
FROM peaks
