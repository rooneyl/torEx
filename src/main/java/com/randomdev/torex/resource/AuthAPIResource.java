package com.randomdev.torex.resource;

import com.randomdev.torex.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthAPIResource {

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username")
                          final String username) {
        System.out.println("GET user by id called with: " + username);
        return null;
    }

    @PostMapping("/login")
    public User login(@RequestBody final String user) {
        System.out.println("POST login called: " + user);
        return null;
    }
}
