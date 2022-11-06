package com.yagieottae.back_end.Repository;

import com.yagieottae.back_end.DTO.UserDTO;
import com.yagieottae.back_end.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<User,Long> {

    @Query(value = "select * from user u where u.user_id=:#{#userID}",nativeQuery = true)
    public User findUserByID(@Param(value="userID") String userID);

    @Modifying
    @Transactional
    @Query(value="insert into user (user_id,user_password) values (:#{#user.userID},:#{#user.userPW})",nativeQuery = true)
    public void signup(@Param(value="user") UserDTO userDTO);

    @Modifying
    @Transactional
    @Query(value = "delete from user",nativeQuery = true)
    public void deleteAll();

    @Modifying
    @Transactional
    @Query(value ="Alter Table user Auto_Increment=:#{#count}" ,nativeQuery = true)
    public void initAutoIncrement(@Param(value="count") int count);
}
