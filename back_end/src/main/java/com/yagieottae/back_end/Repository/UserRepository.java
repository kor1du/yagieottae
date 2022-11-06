package com.yagieottae.back_end.Repository;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUserID(String userID);

    //회원가입
    @Modifying
    @Transactional
    @Query(value="insert into user (user_id,user_password) values (:#{#user.userID},:#{#user.userPW})",nativeQuery = true)
    public void insertUser(@Param(value="user") UserDTO userDTO);

    @Modifying
    @Transactional
    @Query(value="DELETE FROM user where user_id=:info",nativeQuery = true)
    public void deleteUser(@Param(value="info") String ID);
}
