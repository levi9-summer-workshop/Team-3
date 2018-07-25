package rs.levi9.survey.model;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "survey")
public class Survey extends BaseEntity implements Serializable {

    private Long timesSubmitted;

    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private boolean isOpen;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(nullable = false)
    private List<Question> questionList;

    public Survey() {
    }

    public Survey(String description, boolean isOpen, List<Question> questionList) {
        this.description = description;
        this.isOpen = isOpen;
        this.questionList = questionList;
    }

    public Survey(Long timesSubmitted, String description, boolean isOpen, List<Question> questionList) {
        this.timesSubmitted = timesSubmitted;
        this.description = description;
        this.isOpen = isOpen;
        this.questionList = questionList;
    }

    public Survey(Long timesSubmitted, String name, String description, boolean isOpen, List<Question> questionList) {
        this.timesSubmitted = timesSubmitted;
        this.name = name;
        this.description = description;
        this.isOpen = isOpen;
        this.questionList = questionList;
    }

    public Long getTimesSubmitted() {
        return timesSubmitted;
    }

    public void setTimesSubmitted(Long timesSubmitted) {
        this.timesSubmitted = timesSubmitted;
    }

    public void incrTimesSubmitted() {
        if(timesSubmitted == null){
            timesSubmitted = new Long(0);
        }
        timesSubmitted++;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean getOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public List<Question> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<Question> questionList) {
        this.questionList = questionList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return isOpen;
    }
}