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
public class LoginService {
    @Autowired
    UserRepository userRepository;

    public String login(UserDTO userDTO) {
        User user = userRepository.findUserByID(userDTO.getUserID());
        return !checkPassword(userDTO.getUserPW(), user) ?"아이디 혹은 비밀번호를 확인해주세요.":"";
    }

    private boolean checkPassword(String password,User user){
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        boolean check=bCryptPasswordEncoder.matches(password,user.getUserPW());
        return bCryptPasswordEncoder.matches(password,user.getUserPW());
    }
}
