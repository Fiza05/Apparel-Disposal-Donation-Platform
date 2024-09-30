package com.fiza.TestMVP.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fiza.TestMVP.Model.Apparel;
import com.fiza.TestMVP.Repo.ApparelRepository;

import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.io.File;


@RestController
@RequestMapping("/api/apparel")
public class ApparelController {

    @Autowired
    private ApparelRepository apparelRepository;

    @Value("${app.upload.dir:${user.home}}")
    private String uploadDir;
    
    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public Apparel submitApparel(@RequestPart("apparel") Apparel apparel,
            @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
    	
    	// Handle the file upload if there's an image
        if (image != null && !image.isEmpty()) {
            String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
            File file = new File(uploadDir, fileName);
            image.transferTo(file);
            apparel.setImageUrl(file.getAbsolutePath()); // Save the image path to the database
        }
    	
        return apparelRepository.save(apparel);
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Apparel> getAllApparel() {
        return apparelRepository.findAll();
    }
}

