package com.example.reviewweb.Domain;

import jakarta.persistence.*;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
public class product_image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_image_id;

    @ManyToOne
    private review_unit review_unit;

    private String image_url;

    @Column(updatable = false)
    private LocalDateTime create_at;

    @LastModifiedDate
    private LocalDateTime update_at;

}
