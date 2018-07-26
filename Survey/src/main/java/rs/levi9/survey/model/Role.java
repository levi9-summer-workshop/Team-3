package rs.levi9.survey.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class Role extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private RoleType roleType;

    public enum RoleType {
        ROLE_USER, ROLE_ADMIN
    }

    public RoleType getRoleType() {
        return roleType;
    }

    public void setRoleType(RoleType roleType) {
        this.roleType = roleType;
    }
}