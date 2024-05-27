SELECT
	EXTRACT(YEAR FROM booked_at) AS year,
	EXTRACT(MONTH FROM booked_at) AS month,
	EXTRACT(DAY FROM booked_at) AS day,
	EXTRACT(HOUR FROM booked_at AT TIME ZONE 'UTC') AS hour,
	EXTRACT(MINUTE FROM booked_at) AS minute,
	CEILING(EXTRACT(SECOND FROM booked_at)) AS second
FROM
	bookings
