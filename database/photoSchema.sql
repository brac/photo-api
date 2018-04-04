CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  dateTaken INTEGER NOT NULL,
  album_id INTEGER REFERENCES albums(id)
);