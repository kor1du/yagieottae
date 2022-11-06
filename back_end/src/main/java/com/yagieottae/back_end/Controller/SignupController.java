package com.yagieottae.back_end.Controller;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/signup")
public class SignupController {
    @Autowired
    SignupService signupService;

    @PostMapping("/")
    @ResponseBody
    public String signup(@RequestBody  UserDTO userDTO){
        return signupService.signup(userDTO);
    }
}
