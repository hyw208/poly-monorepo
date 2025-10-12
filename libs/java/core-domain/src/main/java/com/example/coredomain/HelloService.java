package com.example.coredomain;

import org.springframework.stereotype.Service;

@Service
public class HelloService {

  public String message() {
    return "Hello World! core -> facility-service -> marketing-website -> hello 3!!";
  }
}
