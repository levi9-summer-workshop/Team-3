package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.Admin;
import rs.levi9.survey.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity getOne(@PathVariable("id") Long id) {
        Admin admin = adminService.getOne(id);
        if (admin == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(admin, HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        adminService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    public Admin save(@RequestBody Admin admin) {
        return adminService.save(admin);
    }

    @PutMapping
    public Admin update(@RequestBody Admin admin) {
        return adminService.save(admin);
    }
}
