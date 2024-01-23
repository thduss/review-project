package com.example.reviewweb.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/api/create-review")
    public String create_review(){
        return "hi";
    }

    @GetMapping("/review")
    public String review(){
        return "hi";
    }

}