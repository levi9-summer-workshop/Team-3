package rs.levi9.survey.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "survey_user")
public class SurveyUser extends BaseEntity implements Serializable {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column
    private String accountConfirmationCode;

    @Column
    private Boolean emailConfirmed;

    @Column(nullable = false)
    private String password;

    @Column
    private boolean isBlocked;

    @Column
    private Date blockedUntil;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = @JoinColumn(name = "survey_user_id"),
           inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles = new ArrayList<>(Arrays.asList(new Role(Role.RoleType.ROLE_USER)));

    @OneToMany(cascade = CascadeType.ALL)
    private List<Survey> surveyList;

    public SurveyUser() {
    }

    public SurveyUser(String uss, String pass) {
        this.username = uss;
        this.password = pass;
    }

    public SurveyUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isBlocked() {
        return isBlocked;
    }

    public void setBlocked(boolean blocked) {
        isBlocked = blocked;
    }

    public Date getBlockedUntil() {
        return blockedUntil;
    }

    public void setBlockedUntil(Date blockedUntil) {
        this.blockedUntil = blockedUntil;
    }

    public List<Survey> getSurveyList() {
        return surveyList;
    }

    public void setSurveyList(List<Survey> surveyList) {
        this.surveyList = surveyList;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public String getAccountConfirmationCode() {
        return accountConfirmationCode;
    }

    public void setAccountConfirmationCode(String accountConfirmationCode) {
        this.accountConfirmationCode = accountConfirmationCode;
    }

    public Boolean getEmailConfirmed() {
        return emailConfirmed;
    }

    public void setEmailConfirmed(Boolean emailConfirmed) {
        this.emailConfirmed = emailConfirmed;
    }
}