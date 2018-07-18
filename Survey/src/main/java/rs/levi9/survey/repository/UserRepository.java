package rs.levi9.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.survey.model.SurveyUser;

@Repository
public interface UserRepository extends JpaRepository<SurveyUser, Long> {

    SurveyUser findUserByEmailAndPassword(String email, String password);

    SurveyUser findUserByUsernameAndPassword(String username, String password);

    SurveyUser findUserByUsername(String username);

    SurveyUser findUserByEmail(String email);
}