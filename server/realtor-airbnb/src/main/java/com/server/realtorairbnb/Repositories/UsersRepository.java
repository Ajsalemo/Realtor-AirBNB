package com.server.realtorairbnb.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.server.realtorairbnb.Entities.Users;

public interface UsersRepository extends CrudRepository<Users, Integer> {

}