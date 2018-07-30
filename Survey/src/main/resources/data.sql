INSERT INTO role (role_type) VALUES ('ROLE_ADMIN');
INSERT INTO role (role_type) VALUES ('ROLE_USER');

insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (1, "admin@survey.com", "admin", "admin", 0, 1);
insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (2, "user@survey.com",  "user",  "user", 0, 1);
insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (3, "user1@survey.com", "user1", "user1", 0, 1);
insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (4, "user2@survey.com", "user2", "user2", 0, 1);
insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (5, "user3@survey.com", "user3", "user3", 0, 1);
insert into survey_user(id, email, password, username, is_blocked, email_confirmed) values (6, "user4@survey.com", "user4", "user4", 0, 1);

insert into survey_user_roles (survey_user_id,role_id) values (1,1);
insert into survey_user_roles (survey_user_id,role_id) values (1,2);
insert into survey_user_roles (survey_user_id,role_id) values (2,2);
insert into survey_user_roles (survey_user_id,role_id) values (3,2);
insert into survey_user_roles (survey_user_id,role_id) values (4,2);
insert into survey_user_roles (survey_user_id,role_id) values (5,2);
insert into survey_user_roles (survey_user_id,role_id) values (6,2);
