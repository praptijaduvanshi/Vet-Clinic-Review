-- Create the vet_clinic database
CREATE DATABASE PawGo;

-- Create the clincs table
CREATE TABLE clinics (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    open_hours VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
    established_date VARCHAR(10) NOT NULL,
    CONSTRAINT valid_phone_number CHECK (phone_number ~ '^\d{10}$'),
    CONSTRAINT valid_established_date CHECK (
       established_date ~ '^\d{2}/\d{2}/\d{4}$')
);

-- Create the reviews table
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    clinic_id BIGINT NOT NULL REFERENCES clinics(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 and rating <= 5)
);

-- Insert Good Reviews
INSERT INTO reviews (clinic_id, name, review, rating)
VALUES
    (16, 'John Doe', 'Outstanding service.', 5);

-- Insert Bad Reviews
INSERT INTO reviews (clinic_id, name, review, rating)
VALUES
    (18, 'David Wilson', 'Terrible experience at this clinic. The staff was rude, and the vet seemed disinterested. My pet''s condition worsened after the visit. Avoid this place at all costs.', 1);

