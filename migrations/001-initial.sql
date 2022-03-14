-- Up
CREATE TABLE Task (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    created DATETIME NOT NULL,
    started DATETIME
    finished DATETIME
    duration TIME
);

INSERT INTO Task (title, description, created) VALUES ('Clean apartment', 'I want the apartment to be nice and clean!', datetime());

-- Down
DROP TABLE Task;