package com.xpinnovators.backend.shop.service;

import com.xpinnovators.backend.exception.ForbiddenException;
import com.xpinnovators.backend.exception.ResourceNotFoundException;
import com.xpinnovators.backend.shop.dto.RedeemItemDTO;
import com.xpinnovators.backend.shop.entity.RedeemItem;
import com.xpinnovators.backend.shop.entity.Trade;
import com.xpinnovators.backend.shop.repository.RedeemItemRepository;
import com.xpinnovators.backend.shop.repository.TradeRepository;
import com.xpinnovators.backend.user.entity.Explorer;
import com.xpinnovators.backend.user.entity.User;
import com.xpinnovators.backend.user.repository.ExplorerRepository;
import com.xpinnovators.backend.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Valid;


@Service
public class ShopService {
    @Autowired
    private RedeemItemRepository redeemItemRepository;
    @Autowired
    private TradeRepository tradeRepository;
    // ... other repositories

    private final UserRepository userRepository;
    private final ExplorerRepository explorerRepository;

    public ShopService(RedeemItemRepository redeemItemRepository, TradeRepository tradeRepository, UserRepository userRepository, ExplorerRepository explorerRepository) {
        this.redeemItemRepository = redeemItemRepository;
        this.tradeRepository = tradeRepository;
        this.userRepository = userRepository;
        this.explorerRepository = explorerRepository;
    }

    // Get all redeemable items with pagination
    public Page<RedeemItemDTO> getAllRedeemItems(Pageable pageable) {
        return redeemItemRepository.findAll(pageable)
                .map(redeemItem -> new RedeemItemDTO(redeemItem));
    }

    // ... (other service methods)

    @Transactional // Use @Transactional for data consistency
    public RedeemItemDTO redeemItem(Long itemId, Authentication authentication) {
        User user = userRepository.findByUsername(authentication.getName());
        Explorer explorer = user.getExplorer();
        if (explorer == null) {
            throw new ForbiddenException("Only explorers can redeem items.");
        }

        RedeemItem item = redeemItemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("RedeemItem", "id", itemId));

        if (item.getQuantity() <= 0) {
            throw new ForbiddenException("This item is currently out of stock.");
        }

        if (explorer.getCoin() < item.getCoinCost()) {
            throw new ForbiddenException("Not enough coins to redeem this item.");
        }

        // Deduct coins from explorer
        explorer.setCoin(explorer.getCoin() - item.getCoinCost());
        explorerRepository.save(explorer);

        // Reduce item quantity
        item.setQuantity(item.getQuantity() - 1);
        redeemItemRepository.save(item);

        // Record the trade
        Trade trade = new Trade();
        trade.setTrader(explorer);
        trade.setItem(item);
        tradeRepository.save(trade);

        return new RedeemItemDTO(item);
    }

    // CREATE Redeem Item
    public RedeemItemDTO createRedeemItem(RedeemItemDTO redeemItemDTO, Authentication authentication) {
        // 1. (Optional) Check if the user has Admin role (you are already doing this with @PreAuthorize)

        // 2. Convert DTO to Entity
        RedeemItem redeemItem = redeemItemDTO.toEntity();

        // 3. Set additional fields (if any)
        // redeemItem.setCreatedBy(...); // Example: Track who created the item

        // 4. Save the entity
        RedeemItem savedItem = redeemItemRepository.save(redeemItem);

        // 5. Convert the saved entity back to DTO (if you need to return data)
        return new RedeemItemDTO(savedItem);
    }

    // UPDATE Redeem Item
    public RedeemItemDTO updateRedeemItem(Long itemId, RedeemItemDTO redeemItemDTO, Authentication authentication) {
        // 1. (Optional) Check Admin role

        // 2. Retrieve the existing RedeemItem from the database
        RedeemItem existingItem = redeemItemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("RedeemItem", "id", itemId));

        // 3. Update the fields of the existing entity with data from the DTO
        existingItem.setItemName(redeemItemDTO.getItemName());
        existingItem.setItemDescription(redeemItemDTO.getItemDescription());
        existingItem.setCoinCost(redeemItemDTO.getCoinCost());
        // ... update other fields as needed

        // 4. Save the updated entity
        RedeemItem updatedItem = redeemItemRepository.save(existingItem);

        // 5. Return the updated DTO (or void if you don't need to return data)
        return new RedeemItemDTO(updatedItem);
    }

    // DELETE Redeem Item
    public void deleteRedeemItem(Long itemId, Authentication authentication) {
        // 1. (Optional) Check Admin role

        // 2. Retrieve the RedeemItem
        RedeemItem redeemItem = redeemItemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("RedeemItem", "id", itemId));

        // 3. Delete the item
        redeemItemRepository.delete(redeemItem);
    }
}