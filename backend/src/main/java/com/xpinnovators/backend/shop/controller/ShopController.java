package com.xpinnovators.backend.shop.controller;

import com.xpinnovators.backend.shop.dto.RedeemItemDTO;
import com.xpinnovators.backend.shop.service.ShopService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/shop")
public class ShopController {

    private final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    // Get all redeemable items
    @GetMapping("/items")
    public ResponseEntity<Page<RedeemItemDTO>> getAllRedeemItems(Pageable pageable) {
        return ResponseEntity.ok(shopService.getAllRedeemItems(pageable));
    }

    // Redeem an item (Explorer only)
    @PostMapping("/items/{itemId}/redeem")
    @PreAuthorize("hasRole('EXPLORER')")
    public ResponseEntity<RedeemItemDTO> redeemItem(@PathVariable Long itemId, Authentication authentication) {
        RedeemItemDTO redeemedItem = shopService.redeemItem(itemId, authentication);
        return ResponseEntity.status(HttpStatus.OK).body(redeemedItem);
    }

    // CREATE a new Redeem Item (Admin only)
    @PostMapping("/items")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RedeemItemDTO> createRedeemItem(@Valid @RequestBody RedeemItemDTO redeemItemDTO, Authentication authentication) {
        RedeemItemDTO createdItem = shopService.createRedeemItem(redeemItemDTO, authentication);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
    }

    // UPDATE an existing Redeem Item (Admin only)
    @PutMapping("/items/{itemId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RedeemItemDTO> updateRedeemItem(
            @PathVariable Long itemId,
            @Valid @RequestBody RedeemItemDTO redeemItemDTO,
            Authentication authentication) {

        RedeemItemDTO updatedItem = shopService.updateRedeemItem(itemId, redeemItemDTO, authentication);
        return ResponseEntity.ok(updatedItem);
    }

    // DELETE a Redeem Item (Admin only)
    @DeleteMapping("/items/{itemId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> deleteRedeemItem(
            @PathVariable Long itemId,
            Authentication authentication) {

        shopService.deleteRedeemItem(itemId, authentication);
        return ResponseEntity.noContent().build();
    }
}