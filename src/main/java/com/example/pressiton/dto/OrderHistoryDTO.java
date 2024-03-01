package com.example.pressiton.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor

    public class OrderHistoryDTO {

        private Integer orderId;
        private String productName;
        private float price;
        private Integer quantity;
        private Integer total;
        private LocalDateTime orderDate;


    }
