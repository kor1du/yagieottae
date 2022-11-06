package com.yagieottae.back_end.Service;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Domain.User;
import com.yagieottae.back_end.Repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class LoginService {
    @Autowired
    UserRepository userRepository;

    public boolean login(UserDTO userDTO){
        User user= userRepository.findByUserID(userDTO.getUserID());
        return user==null?false:true;
    }
}
