package com.randomdev.torex.resource;

import com.randomdev.torex.model.Torrent;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/torrent")
public class TorrentAPIResource {
    @GetMapping("/download/list/{username}")
    public List<Torrent> getDownloadList(@PathVariable("username")
                          final String username) {
        System.out.println("GET download list by username called with: " + username);
        return null;
    }

    @GetMapping("/download/{id}")
    public Torrent getDownload(@PathVariable("id")
                               final String id) {
        System.out.println("GET download by id called with: " + id);
        return null;
    }

    @PostMapping("/download")
    public Torrent startDownload(@RequestBody final String magnet) {
        System.out.println("POST download called with: " + magnet);
        return null;
    }
}