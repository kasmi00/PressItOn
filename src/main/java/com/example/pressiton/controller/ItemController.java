package com.example.pressiton.controller;

import com.example.pressiton.dto.ItemDTO;
import com.example.pressiton.entity.Item;
import com.example.pressiton.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;

    @GetMapping("/data")
    public String getData() {
        return "data retrieved";
    }

    @PostMapping("/save")
    public ResponseEntity<String> createData(@RequestBody ItemDTO itemDTO) {
        try {
            itemService.save(itemDTO);
            return ResponseEntity.ok("Product successfully saved");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating/updating data");
        }
    }

    @GetMapping("/getAll")
    public List<Item> getAllData() {
        return itemService.getAll();
    }

    @GetMapping("/getByName/{productName}")
    public ResponseEntity<Item> getByName(@PathVariable("productName") String productName) {
        Optional<Item> item = itemService.getByProductName(productName);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getById/{id}")
    public Optional<Item> getById(@PathVariable("id") Integer id) {
        return itemService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable("id") Integer productId) {
        itemService.deleteById(productId);
        return "product deleted.";
    }

    @DeleteMapping("/deleteByName/{productName}")
    public String deleteByName(@PathVariable("productName") String productName) {
        itemService.deleteByName(productName);
        return "product deleted by name.";
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateData(@RequestBody ItemDTO updatedItemDTO) {
        try {
            itemService.update(updatedItemDTO);
            return ResponseEntity.ok("Product successfully updated");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating/updating data");
        }
    }
}
