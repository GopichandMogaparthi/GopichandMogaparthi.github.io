package com.gopichand.portfolio.service;

import com.gopichand.portfolio.dto.Dtos.ContactRequest;
import com.gopichand.portfolio.dto.Dtos.ContactResponse;
import com.gopichand.portfolio.model.ContactMessage;
import com.gopichand.portfolio.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final ContactMessageRepository contactMessageRepository;
    private final EmailService emailService;

    public ContactService(ContactMessageRepository contactMessageRepository, EmailService emailService) {
        this.contactMessageRepository = contactMessageRepository;
        this.emailService = emailService;
    }

    @Transactional
    public ContactResponse handleSubmission(ContactRequest request) {
        ContactMessage message = new ContactMessage();
        message.setSenderName(request.getName());
        message.setSenderEmail(request.getEmail());
        message.setSubject(request.getSubject());
        message.setMessage(request.getMessage());
        message.setEmailSent(false);

        ContactMessage saved = contactMessageRepository.save(message);

        boolean emailSent = emailService.sendContactNotification(saved);
        if (emailSent) {
            saved.setEmailSent(true);
            contactMessageRepository.save(saved);
        }

        return new ContactResponse("success", "Thanks for reaching out — I'll get back to you soon.");
    }
}
