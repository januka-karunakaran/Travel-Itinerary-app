package com.travelitinerary.controller;

import com.travelitinerary.model.Booking;
import com.travelitinerary.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        booking.setCreatedAt(Instant.now().toString());
        return bookingRepository.save(booking);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getBookings(@PathVariable String userId) {
        return bookingRepository.findByUserId(userId);
    }
}
