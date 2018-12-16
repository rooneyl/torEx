package com.randomdev.torex.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/public", produces = "application/json")
public class PublicResource {

    @GetMapping("/hello")
    @ResponseBody
    public String getHello() {
        return "hello";
    }
}
