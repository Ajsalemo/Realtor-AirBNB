package com.server.realtorairbnb.Controllers;

import com.server.realtorairbnb.Entities.Users;
import com.server.realtorairbnb.Repositories.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    @GetMapping(path = "/users")
    public Iterable<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    @PostMapping(path = "/add_user")
    public ResponseEntity<String> addUser(@RequestBody Users newUser) {
        // Save the user
        usersRepository.save(newUser);
        // Return a HTTP 201 'created' status
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(path = "/find_user/{id}")
    public Users findUser(@PathVariable int id) {
        // Find the user by ID, if there is no user, thrown an exception
        return usersRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }
}