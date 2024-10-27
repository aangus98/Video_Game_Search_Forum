DROP DATABASE IF EXISTS forum_db;

-- Create the database
CREATE DATABASE forum_db;

\c forum_db

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(24) NOT NULL UNIQUE,
  password VARCHAR(250) NOT NULL
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  api_id INT NOT NULL,
  title VARCHAR(250) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id INT,
  game_id INT,
  content TEXT,
  score INT CHECK (score >= 1 AND score <= 10),
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE,
  FOREIGN KEY (game_id)
  REFERENCES games(id)
  ON DELETE CASCADE
);

CREATE TABLE completion_times (
  id SERIAL PRIMARY KEY,
  user_id INT,
  game_id INT,
  completionTime TIME NOT NULL,
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE,
  FOREIGN KEY (game_id)
  REFERENCES games(id)
  ON DELETE CASCADE
);

CREATE TABLE recommendations (
  id SERIAL PRIMARY KEY,
  user_id INT,
  game_id INT,
  recommended_game_id INT NOT NULL,
  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE,
  FOREIGN KEY (game_id)
  REFERENCES games(id)
  ON DELETE CASCADE,
  FOREIGN KEY (recommended_game_id)
  REFERENCES games(id)
  ON DELETE CASCADE
);