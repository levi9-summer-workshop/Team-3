package rs.levi9.survey.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class Role extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private RoleType type;

    public enum RoleType {
        ROLE_USER, ROLE_ADMIN
    }

    public RoleType getType() {
        return type;
    }

    public void setType(RoleType type) {
        this.type = type;
    }
}