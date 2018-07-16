package rs.levi9.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.survey.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
