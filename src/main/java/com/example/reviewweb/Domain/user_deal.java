package com.example.reviewweb.Domain;

import jakarta.persistence.*;

@Entity
public class user_deal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long deal_id;

    @Enumerated(EnumType.STRING)
    private status status;
}
