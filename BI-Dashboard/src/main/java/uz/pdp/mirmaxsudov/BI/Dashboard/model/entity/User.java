package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity;

import jakarta.persistence.*;
import lombok.*;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.enums.Role;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String password;
    private String email;
    @Enumerated(EnumType.STRING)
    private Role role;
}