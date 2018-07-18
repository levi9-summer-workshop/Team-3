package rs.levi9.survey.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "survey_user")
public class SurveyUser extends BaseEntity implements Serializable {

    @NotNull
    @Column(nullable = false)
    private String username;

    @NotNull
    @Column(nullable = false)
    private String email;

    @NotNull
    @Column(nullable = false)
    private String password;

    @NotNull
    @Column(nullable = false)
    @OneToMany
    private List<Survey> surveyList;

    public SurveyUser() {
    }

    public SurveyUser(String uss, String pass) {
        this.username = uss;
        this.email = uss;
        this.password = pass;
    }

    public SurveyUser(@NotNull String username, @NotNull String email, @NotNull String password, @NotNull List<Survey> surveyList) {
        this.username = username;
        this.email = email;
        this.password = password;
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

    public List<Survey> getSurveyList() {
        return surveyList;
    }

    public void setSurveyList(List<Survey> surveyList) {
        this.surveyList = surveyList;
    }
}