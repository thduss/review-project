package com.example.reviewweb.Domain;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long review_id;

    @ManyToOne
    private review_unit review_unit;

    @ManyToOne
    private user_deal user_deal;

    @NotNull
    private int rating;

    private List<product_image> image_urls;

    private String text;

    @Column(updatable = false)
    private LocalDateTime create_at;

    @LastModifiedDate
    private LocalDateTime update_at;

}
