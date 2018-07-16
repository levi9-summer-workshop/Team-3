package rs.levi9.survey.service;

import org.springframework.stereotype.Service;
import rs.levi9.survey.model.User;
import rs.levi9.survey.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getOne(Long id) {
        return userRepository.getOne(id);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    public User findUser(String uss, String pass) {
        return (userRepository.findUserByEmailAndPassword(uss, pass) == null) ? userRepository.findUserByUsernameAndPassword(uss, pass) : userRepository.findUserByEmailAndPassword(uss, pass);
    }
}