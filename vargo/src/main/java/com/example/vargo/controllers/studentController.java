package com.example.vargo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.vargo.services.StudentCourseService;


@Controller
@RequestMapping("/api")
public class studentController {
    @GetMapping("/")
    public String index() {
        return "index"; // Thymeleaf page with input form
    }

    @Autowired
    StudentCourseService service;

    @RequestMapping("/student/{id}")
    @ResponseBody
    public List<String> getCourses(@PathVariable int id) {
        System.out.println("Fetching courses for student ID: " + id);
        return service.getCoursesByStudentId(id);
    }
}