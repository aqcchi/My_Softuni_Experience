SELECT 
	magic_wand_creator,
	MIN(magic_wand_size)
FROM
	wizard_deposits
GROUP by 
	magic_wand_creator
ORDER BY
	MIN(magic_wand_size)
LIMIT 5
