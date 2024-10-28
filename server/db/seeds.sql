INSERT INTO users (username, password) VALUES
('test_user1', 'hashed_password1'),
('test_user2', 'hashed_password2'),
('test_user3', 'hashed_password3');

INSERT INTO games (api_id, title) VALUES
(1001, 'Game One'),
(1002, 'Game Two'),
(1003, 'Game Three');

INSERT INTO reviews (user_id, game_id, content, score) VALUES
(1, 1, 'Great game, enjoyed every moment!', 9),
(2, 2, 'Not bad, but could be better.', 6),
(3, 3, 'Did not like it very much.', 4),
(1, 2, 'Had a good time playing Game Two!', 8),
(2, 3, 'Game Three was surprisingly enjoyable.', 7);

INSERT INTO completion_times (user_id, game_id, completion_time) VALUES
(1, 1, '10:30:00'),
(2, 2, '12:45:00'),
(3, 3, '08:15:00'),
(3, 1, '09:00:00'),
(1, 3, '11:20:00');

INSERT INTO recommendations (user_id, game_id, recommended_game_id, recommended_game_title) VALUES
(1, 1, 2, 'Game Two'),
(2, 2, 3, 'Game Three'),
(3, 3, 1, 'Game One'),
(1, 2, 3, 'Game Three'),
(2, 3, 1, 'Game One');
