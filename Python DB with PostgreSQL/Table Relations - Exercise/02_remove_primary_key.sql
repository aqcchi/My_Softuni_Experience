SELECT constraint_name
FROM information_schema.table_constraints
WHERE table_name = 'products'
  AND constraint_type = 'PRIMARY KEY';

ALTER TABLE products
DROP CONSTRAINT products_pkey;
