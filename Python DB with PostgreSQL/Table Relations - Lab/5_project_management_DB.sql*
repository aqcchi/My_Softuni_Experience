CREATE TABLE clients(
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE projects(
    id INT PRIMARY KEY,
    client_id INT,
    project_lead_id INT
);

CREATE TABLE employees(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    project_id INT
);

ALTER TABLE projects
    ADD CONSTRAINT fk_projects_clients
        FOREIGN KEY (client_id)
        REFERENCES clients(id);

ALTER TABLE projects
    ADD CONSTRAINT fk_projects_employees
        FOREIGN KEY (project_lead_id)
        REFERENCES employees(id);

ALTER TABLE employees
    ADD CONSTRAINT fk_employees_projects
        FOREIGN KEY (project_id)
        REFERENCES projects(id);
