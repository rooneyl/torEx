package com.randomdev.torex.repository;

import com.randomdev.torex.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Integer> userIds);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
