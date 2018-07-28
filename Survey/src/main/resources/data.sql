INSERT INTO role (role_type) VALUES ('ROLE_ADMIN');
INSERT INTO role (role_type) VALUES ('ROLE_USER');

insert into survey_user(id, email, password, username, is_blocked) values (1, "admin@survey.com", "admin", "admin", 0);
insert into survey_user(id, email, password, username, is_blocked) values (2, "user@survey.com",  "user",  "user", 0);


insert into survey_user_roles (survey_user_id,role_id) values (1,1);
insert into survey_user_roles (survey_user_id,role_id) values (1,2);
insert into survey_user_roles (survey_user_id,role_id) values (2,2);
