package com.example.pressiton.controller;


//import com.example.prettyfeels.controller.Authentication.OtpEmailSender;
import com.example.pressiton.dto.UserForgetPasswordDTO;
import com.example.pressiton.entity.User;
import com.example.pressiton.dto.UserDTO;
import com.example.pressiton.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //
@RequestMapping("/user")
@RequiredArgsConstructor // to inject dependency, reduced code
@CrossOrigin(origins = "http://localhost:5173")

public class UserController {

    private final UserService userService;
//    private final OtpEmailSender otpSender = new OtpEmailSender();
    private final boolean[] emailOtpPassword={false, false, false};

    @GetMapping("/data")
    public String getData(){
        return "data retrieved";
    }

    @PostMapping("/save")
    public ResponseEntity<String> createData(@RequestBody UserDTO userDTO) {
        try {
            userService.save(userDTO);
            return ResponseEntity.ok("User successfully saved");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving user");
        }
    }
    @GetMapping("/getAll")
    public List<User> getAll(){
        return userService.getAll();
    }



    @GetMapping("/getById/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") Integer id) {
        Optional<User> userOptional = userService.getById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getByEmail/{email}")
    public ResponseEntity<User> getByEmail(@PathVariable("email") String email) {
        Optional<User> userOptional = userService.getByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteById/{id}")
    public void delete(@PathVariable("id") Integer id){
        userService.deleteById(id);
    }

    @PostMapping("/validateLogin")
    public ResponseEntity<String> validateLogin(@RequestBody UserDTO userDTO) {

        System.out.println("Received request with userDTO: " + userDTO);
        // Validate login logic using the userService
        boolean isValidLogin = userService.validateLogin(userDTO.getUsername(), userDTO.getPassword());

        if (isValidLogin) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

//    @PostMapping("/sendotp")
//    public boolean sendOTP(@RequestBody UserForgetPasswordDTO newUserDTO){
//        // check if user exists in database
//
//        final String userOTP = otpSender.otp;
//
//        if (userService.getByEmail(newUserDTO.getEmail()).isPresent()) {// Email present in the database
//            if (newUserDTO.getOtp().isBlank() && !emailOtpPassword[1]) {// otp is blank so send through email.
//
//                System.out.println(otpSender.otp);
//                otpSender.sendOtpEmail(newUserDTO.getEmail());
//                emailOtpPassword[1]=true;
//                return true;
//            }
//            else {// otp is given
//                if (!newUserDTO.getOtp().equals(userOTP)){// otp doesnt match
//                    return false;
//                } else {// otp matches
//                    if (newUserDTO.getPassword().isBlank() && !emailOtpPassword[2]) {// password is not given
//                        emailOtpPassword[2]=true;
//                        return true;
//                    }
//                    else if (!newUserDTO.getPassword().isBlank()){// password is given so sets new password.
//                        User user = userService.getByEmail(newUserDTO.getEmail()).get();
//                        UserDTO userDTO = getUserDTO(newUserDTO, user);
//
//                        userService.save(userDTO);
//                        emailOtpPassword[2]=true;
//                        return true;
//                    }
//                    else{
//                        return false;
//                    }
//                }
//            }
//        } else {
//            return false;
//        }
//    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateData(@PathVariable("id") Integer id, @RequestBody UserDTO userDTO) {
        try {
            Optional<User> userOptional = userService.getById(id);

            if (userOptional.isPresent()) {
                User existingUser = userOptional.get();


                existingUser.setUsername(userDTO.getUsername());
                existingUser.setEmail(userDTO.getEmail());
                existingUser.setMobileNo(userDTO.getMobileNo());
                existingUser.setPassword(userDTO.getPassword());

                userService.update(existingUser);

                return ResponseEntity.ok("User details updated successfully!");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating user details");
        }
    }
    private static UserDTO getUserDTO(UserForgetPasswordDTO newUserDTO, User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setMobileNo(user.getMobileNo());
        userDTO.setPassword(newUserDTO.getPassword());
        return userDTO;
    }




}

