package com.ordulu.mailsender.controller;

import com.ordulu.mailsender.entities.ContactEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@RestController
@RequestMapping("/mail")
public class MailController {
    @PostMapping("/sendcontactmail")
    public void sendMail(@RequestBody ContactEntity contact, RedirectAttributes redirectAttributes) {
        try {
            System.setProperty("java.net.preferIPv4Stack" , "true");

            final String username = "talat.farimaz@ordulu.com";
            final String password = "ordulu58..";

            Properties prop = new Properties();
            prop.put("mail.smtp.host", "mail.ordulu.com");
            prop.put("mail.smtp.auth", "false");
            prop.put("mail.smtp.port", "25");
            prop.put("mail.smtp.starttls.enable", "false"); //TLS
            prop.put("mail.smtp.ssl.trust", "mail.ordulu.com");


            Session session = Session.getInstance(prop,
                    new javax.mail.Authenticator() {
                        protected PasswordAuthentication getPasswordAuthentication() {
                            return new PasswordAuthentication(username, password);
                        }
                    });

            try {

                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress("talat.farimaz@gmail.com"));
                message.addRecipient(
                        Message.RecipientType.TO,
                        new InternetAddress(username)
                );
                message.setSubject("Testing Gmail TLS");
                message.setText("Dear Mail Crawler,"
                        + "\n\n Please do not spam my email!");

                Transport.send(message);

                System.out.println("Done");

            } catch (MessagingException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            throw e;
        }
    }


}
