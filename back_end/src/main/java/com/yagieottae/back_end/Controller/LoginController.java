package com.yagieottae.back_end.Controller;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService loginService=new LoginService();

    @PostMapping("/")
    @ResponseBody
    public boolean login(@RequestBody UserDTO userDTO){
        return loginService.login(userDTO);
    }
}
