package com.example.pressiton.service;

import com.example.pressiton.dto.ItemDTO;
import com.example.pressiton.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    void deleteByName(String productName);
    String save(ItemDTO productDTO);
    List<Item> getAll();
    Optional<Item> getById(Integer productId);
    void deleteById(Integer productId);

    Optional<Item> getByProductName(String productName);

    void update(ItemDTO updatedItemDTO);
}
