package rs.levi9.survey.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "survey_user")
public class SurveyUser extends BaseEntity implements Serializable {

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column
    private boolean isBlocked;

    @Column
    private Date blockedUntil;

    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name = "survey_user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Survey> surveyList;

    public SurveyUser() {
    }

    public SurveyUser(String uss, String pass) {
        this.username = uss;
        this.email = uss;
    }

    public SurveyUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public SurveyUser(String username, String email, String password, List<Survey> surveyList) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.surveyList = surveyList;
    }

    public SurveyUser(String username, String email, String password, boolean isBlocked, Date blockedUntil, List<Survey> surveyList) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.isBlocked = isBlocked;
        this.blockedUntil = blockedUntil;
        this.surveyList = surveyList;
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
}