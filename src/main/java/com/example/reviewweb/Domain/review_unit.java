package com.example.reviewweb.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class review_unit {
    @Id
    @GeneratedValue
    private Long review_unit_id;

    private char review_unit_code;

    private String description;

    private LocalDateTime create_at;

    private LocalDateTime update_at;
}
