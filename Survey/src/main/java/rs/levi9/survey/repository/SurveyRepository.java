package rs.levi9.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.survey.model.Survey;

@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
