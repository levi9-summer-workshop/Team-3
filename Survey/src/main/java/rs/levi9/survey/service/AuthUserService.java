package rs.levi9.survey.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Role;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AuthUserService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public AuthUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            SurveyUser user = userRepository.findUserByUsername(username);
            if (user == null) {
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

            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.getRoleType().toString());
            authorities.add(grantedAuthority);
        }
        return authorities;
    }
}