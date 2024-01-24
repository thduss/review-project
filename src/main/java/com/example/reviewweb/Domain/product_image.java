package com.example.reviewweb.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class product_image {
    @Id
    @GeneratedValue
    private Long product_image_id;

    private review_unit review_unit;

    private String image_url;

    private LocalDateTime create_at;

    private LocalDateTime update_at;

}
