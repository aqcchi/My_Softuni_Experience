CREATE TYPE type_mood as ENUM('happy', 'relaxed', 'stressed', 'sad');

ALTER TABLE minions_info
ADD COLUMN mood type_mood
