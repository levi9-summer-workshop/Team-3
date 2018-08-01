package rs.levi9.survey.model.dto;

import java.util.List;

public class AuthenticatedUser{

    private Long id;
    private String username;
    private String email;
    private List<String> roles;
    private Boolean emailConfirmed;

    public AuthenticatedUser() {
    }

    public AuthenticatedUser(String username, List<String> roles) {
        this.username = username;
        this.roles = roles;
    }

    public AuthenticatedUser(Long id, String username, String email, List<String> roles, Boolean emailConfirmed) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.emailConfirmed = emailConfirmed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public Boolean getEmailConfirmed() {
        return emailConfirmed;
    }

    public void setEmailConfirmed(Boolean emailConfirmed) {
        this.emailConfirmed = emailConfirmed;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}