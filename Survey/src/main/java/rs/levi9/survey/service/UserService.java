package rs.levi9.survey.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Role;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public SurveyUser getOne(Long id) {
        return userRepository.findOne(id);
    }

    public List<SurveyUser> findAll() {
        return userRepository.findAll();
    }

    public SurveyUser save(SurveyUser surveyUser) {
        return userRepository.save(surveyUser);
    }

    public void delete(Long id) {
        userRepository.delete(id);
    }

    public SurveyUser block(SurveyUser surveyUser) {
        surveyUser.setBlocked(!surveyUser.isBlocked());
        return userRepository.save(surveyUser);
    }

    public SurveyUser findUser(String uss, String pass) {
        return (userRepository.findUserByEmailAndPassword(uss, pass) == null) ? userRepository.findUserByUsernameAndPassword(uss, pass) : userRepository.findUserByEmailAndPassword(uss, pass);
    }

    public boolean checkIfUserExists(SurveyUser surveyUser) {
        return(userRepository.findUserByEmail(surveyUser.getEmail()) == null && userRepository.findUserByUsername( surveyUser.getUsername()) == null);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            SurveyUser user = userRepository.findUserByUsername(username);
            if(user == null){
                user = userRepository.findUserByEmail(username);
            }else if (user == null) {
                return null;
            }
            return new User(user.getUsername(), user.getPassword(), getAuthorities(user));
        } catch (Exception e) {
            throw new UsernameNotFoundException("User not found");
        }
    }

    private List<GrantedAuthority> getAuthorities(SurveyUser user){
        List<GrantedAuthority> authorities = new ArrayList<>();
        for(Role role : user.getRoles()) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.getType().toString());
            authorities.add(grantedAuthority);
        }
        return authorities;
    }
}