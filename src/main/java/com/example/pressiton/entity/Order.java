package com.example.pressiton.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="orders")
public class Order {

    @Id
    @SequenceGenerator(name = "order_seq_gen", sequenceName = "order_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "order_seq_gen", strategy = GenerationType.SEQUENCE)

    private Integer orderId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "total", nullable = false)
    private Integer total;

    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate;

}