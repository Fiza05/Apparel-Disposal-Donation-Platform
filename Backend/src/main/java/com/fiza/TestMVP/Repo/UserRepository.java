package com.fiza.TestMVP.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiza.TestMVP.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
}

