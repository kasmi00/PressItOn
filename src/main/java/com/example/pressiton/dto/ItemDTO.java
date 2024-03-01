package com.example.pressiton.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO {
    private Integer itemId;
    @NotNull
    private String productName;
    @NotNull
    private String description;
    @NotNull
    private float price;
    @NotNull
    private String category;

    private String imageUrl;
}
