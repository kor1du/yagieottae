package com.yagieottae.back_end.Domain;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="user_id")
    private String userID;

    @Column(name="user_password")
    private String userPW;
}
