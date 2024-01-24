package com.example.reviewweb.Domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.DateTimeException;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class review {
    @Id
    @GeneratedValue
    private Long review_id;

    private review_unit review_unit;

    @NotNull
    private int rating;

    private List<product_image> image_urls;

    private String text;

    private LocalDateTime create_at;

    private LocalDateTime update_at;

}
