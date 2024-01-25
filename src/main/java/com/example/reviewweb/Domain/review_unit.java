package com.example.reviewweb.Domain;

import jakarta.persistence.*;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
public class review_unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long review_unit_id;

    private char review_unit_code;

    private String description;

    @Column(updatable = false)
    private LocalDateTime create_at;

    @LastModifiedDate
    private LocalDateTime update_at;
}
