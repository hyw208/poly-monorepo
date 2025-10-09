package com.example.facilityservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example")
public class FacilityServiceApplication {

  public static void main(String[] args) {
    SpringApplication.run(FacilityServiceApplication.class, args);
  }
}
