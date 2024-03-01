package com.example.pressiton.repository;

import com.example.pressiton.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item, Integer> {
    Optional<Item> findByProductName(String productName);
}