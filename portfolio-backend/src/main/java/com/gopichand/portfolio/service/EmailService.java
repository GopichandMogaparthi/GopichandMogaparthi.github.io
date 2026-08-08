package com.gopichand.portfolio.service;

import com.gopichand.portfolio.model.ContactMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    private static final Logger log = LoggerFactory.getLogger(EmailService.class);

    private final RestClient restClient;

    @Value("${resend.api-key}")
    private String apiKey;

    @Value("${resend.from-email}")
    private String fromEmail;

    @Value("${portfolio.contact.to-email}")
    private String toEmail;

    public EmailService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.baseUrl("https://api.resend.com").build();
    }

    public boolean sendContactNotification(ContactMessage contactMessage) {
        try {
            String subject = contactMessage.getSubject() != null && !contactMessage.getSubject().isBlank()
                    ? contactMessage.getSubject()
                    : "New Message from " + contactMessage.getSenderName();

            Map<String, Object> body = Map.of(
                    "from", fromEmail,
                    "to", List.of(toEmail),
                    "reply_to", contactMessage.getSenderEmail(),
                    "subject", "[Portfolio] " + subject,
                    "text", "From: " + contactMessage.getSenderName() + " <" + contactMessage.getSenderEmail() + ">\n\n"
                            + contactMessage.getMessage()
            );

            restClient.post()
                    .uri("/emails")
                    .header("Authorization", "Bearer " + apiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(body)
                    .retrieve()
                    .toBodilessEntity();
            return true;
        } catch (RestClientException e) {
            log.warn("Failed to send contact notification email for message id {}: {}",
                    contactMessage.getId(), e.getMessage());
            return false;
        }
    }
}
