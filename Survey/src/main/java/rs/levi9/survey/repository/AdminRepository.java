package rs.levi9.survey.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.levi9.survey.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

    Admin findAdminByEmailAndPassword(String email, String password);

    Admin findAdminByUsernameAndPassword(String username, String password);

}
