package com.yagieottae.back_end.repository;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Domain.User;
import com.yagieottae.back_end.Repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;

    @Test
    @Rollback(false)
    public void insert() throws Exception{
        UserDTO userDTO=UserDTO.builder()
                        .userID("user")
                                .userPW("password")
                                        .build();
        userRepository.signup();
    }

    @Test
    @Rollback(false)
    public void find() throws Exception {
       User user= userRepository.findUserByID("user");

        System.out.println(user.toString());
    }
}
