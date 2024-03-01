package com.example.pressiton.service;

import com.example.pressiton.dto.OrderDTO;
import com.example.pressiton.dto.OrderHistoryDTO;
import com.example.pressiton.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}