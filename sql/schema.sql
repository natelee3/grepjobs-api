CREATE TABLE jobs (
    id serial PRIMARY KEY,
    job_id numeric NOT NULL,
    user_sub text NOT NULL,
    applied boolean DEFAULT false,
    company_name text NOT NULL,
    role text NOT NULL,
    logo varchar,
    location text,
    date_posted varchar
);

INSERT INTO jobs
    (job_id, user_sub, company_name, role, logo, location, date_posted)
VALUES
    (88862, 'auth0|610af39ed056750070db818a', 'Greenwood, Inc.', 'iOS Senior Mobile App Engineer', null, 'Atlanta', '2021-08-05T15:01:25Z'),
    (91071, 'auth0|610c3621c724050071b76f95', 'Ethyca', 'Senior Open Source Engineer (Python)', 'https://findwork-dev-images.s3.amazonaws.com/Ethyca', null, '2021-08-02T17:12:37Z'),
    (91657, 'auth0|610af39ed056750070db818a', 'JPMorgan Chase & Co.', 'ServiceNow Lead Developer/Architect', 'https://findwork-dev-images.s3.amazonaws.com/jpmorgan-chase-co-job-91657', 'Plano', '2021-08-05T04:00:00Z');


   
