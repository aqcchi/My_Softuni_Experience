SELECT 
	deposit_group,
	SUM(deposit_interest)
FROM
	wizard_deposits
GROUP by 
	deposit_group
ORDER BY
	SUM(deposit_interest) DESC
