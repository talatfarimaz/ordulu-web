package com.ordulu.mailsender.controller;

import com.ordulu.mailsender.entities.ContactEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
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
        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
        String host = "mail.ordulu.com";
        javaMailSender.setHost(host);
        javaMailSender.setPort(25);
        javaMailSender.setPassword("ordulu58..");
        javaMailSender.setUsername("talat.farimaz@ordulu.com");
        Properties props = javaMailSender.getJavaMailProperties();
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", false);
        props.put("mail.smtp.timeout", 10000);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.transport.protocol", "smtp");
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "UTF-8");
            messageHelper.setFrom("talat.farimaz@ordulu.com");
            messageHelper.setTo("talat.farimaz@gmail.com");
            messageHelper.setSubject("subject");
            messageHelper.setText("content", true);
        };
        try {
            javaMailSender.send(mimeMessagePreparator);
            System.out.println("basarili");
        } catch (MailException e) {
            System.out.println(e.getMessage());
        }
    }
}
