package com.yagieottae.back_end.Service;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class SignupService {
    @Autowired
    UserRepository userRepository;

}
