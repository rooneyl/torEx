package com.randomdev.torex.repository;

import com.randomdev.torex.model.Role;
import com.randomdev.torex.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(RoleName roleName);
}
