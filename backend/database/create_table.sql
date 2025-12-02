CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    user_Image TEXT
    password TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    violation BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE IF NOT EXISTS comment(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    parent_comment_id INTEGER REFERENCES comment(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLES IF NOT EXISTS likes(
     id SERIAL PRIMARY KEY,
     user_id INTEGER REFERENCES USER(id) ON DELETE CASCADE,
     post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
     created_at TIMESTAMP DEFAULT NOW(),
     UNIQUE (post_id, user_id)

);