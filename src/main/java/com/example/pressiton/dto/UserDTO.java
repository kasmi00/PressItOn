package com.example.pressiton.dto;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Integer id;
    @NotNull
    private String username;
    @NotNull
    private String email;
    @NotNull
    private String mobileNo;
    @NotNull
    private String password;


    public String getUsername() {
        return username;
    }
}
