package com.server.realtorairbnb.Controllers;

import com.server.realtorairbnb.Entities.Users;
import com.server.realtorairbnb.Repositories.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping(path = "/users")
    public Iterable<Users> getAllUsers() {
        return usersRepository.findAll();
    }
}