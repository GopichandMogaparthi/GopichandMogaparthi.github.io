package com.gopichand.portfolio.controller;

import com.gopichand.portfolio.dto.Dtos.ContactRequest;
import com.gopichand.portfolio.dto.Dtos.ContactResponse;
import com.gopichand.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ContactResponse submit(@Valid @RequestBody ContactRequest request) {
        return contactService.handleSubmission(request);
    }
}
