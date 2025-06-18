package com.example.vargo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class StudentCourseService {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Value("${sql.getCoursesByStudentId}")
    private String getCoursesByStudentIdQuery;

    public List<String> getCoursesByStudentId(int studentId) {
        return jdbcTemplate.query(getCoursesByStudentIdQuery, new Object[]{studentId},
            (rs, rowNum) -> rs.getString("name"));
    }
}
