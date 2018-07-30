package rs.levi9.survey.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "survey")
public class Survey extends BaseEntity implements Serializable {

    private Long timesSubmitted;

    @Transient
    private Long userId;

    @Column
    private String surveyUrl;

    @Column
    private Boolean surveyIsPublic;

    @Transient
    private String surveyOwner;

    private String name;

    @ManyToOne
    @JoinColumn(name = "fk_survey_user_id")
    private SurveyUser surveyUser;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private boolean isOpen;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(nullable = false)
    private List<Question> questionList;

    public Survey() {
    }

    public void incrTimesSubmitted() {
        if(timesSubmitted == null){
            timesSubmitted = new Long(0);
        }
        timesSubmitted++;
    }

    public boolean getOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }
    public boolean isOpen() {
        return isOpen;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getSurveyOwner() {
        return surveyOwner;
    }

    public void setSurveyOwner(String surveyOwner) {
        this.surveyOwner = surveyOwner;
    }

    public SurveyUser getSurveyUser() {
        return surveyUser;
    }

    public void setSurveyUser(SurveyUser surveyUser) {
        this.surveyUser = surveyUser;
    }

    public String getSurveyUrl() {
        return surveyUrl;
    }

    public void setSurveyUrl(String surveyUrl) {
        this.surveyUrl = surveyUrl;
    }

    public Boolean getSurveyIsPublic() {
        return surveyIsPublic;
    }

    public void setSurveyIsPublic(Boolean surveyIsPublic) {
        this.surveyIsPublic = surveyIsPublic;
    }

    public Long getTimesSubmitted() {
        return timesSubmitted;
    }

    public void setTimesSubmitted(Long timesSubmitted) {
        this.timesSubmitted = timesSubmitted;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}