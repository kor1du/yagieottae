package com.yagieottae.back_end.Service;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Domain.User;
import com.yagieottae.back_end.Repository.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class SignupService {
    @Autowired
    UserRepository userRepository;

    public String signup(UserDTO userDTO) {
        String returnValue = "";

        User user = userRepository.findUserByID(userDTO.getUserID());
        if (user == null) {
            BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
            userDTO.setUserPW(encoder.encode(userDTO.getUserPW()));
            userRepository.signup(userDTO);
            returnValue = "약이어때의 회원이 되신걸 환영해요!";
        } else {
            returnValue = "중복된 아이디를 사용하는 회원이 존재해요.";
        }

        return returnValue;
    }
}
