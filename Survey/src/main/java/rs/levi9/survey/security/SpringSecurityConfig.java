package rs.levi9.survey.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import rs.levi9.survey.service.AuthUserService;

@Configurable
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthUserService authUserService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
         auth.userDetailsService(authUserService);
       // auth.inMemoryAuthentication()
         //       .withUser("user5").password("user5").authorities("USER")
           //     .and()
             //   .withUser("user6").password("user6").roles("USER", "ADMIN");
        System.out.println("global configurer finished");
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
                http
                // starts authorizing configurations
                .authorizeRequests()
                // ignore options method sent by browser
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers(HttpMethod.POST, "/user/register").permitAll()
                // ignore the static files
                .antMatchers( "/", "/index.html", "/*.bundle.*", "/favicon.ico", "/assets/**").permitAll()
                // authenticate all remaining URLS
                .anyRequest().fullyAuthenticated().and()
                // enabling the basic authentication
                .httpBasic().and()
                // configuring the session as state less. Which means there is
                // no session in the server
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                // disabling the CSRF - Cross Site Request Forgery
                .csrf().disable();
    }
}