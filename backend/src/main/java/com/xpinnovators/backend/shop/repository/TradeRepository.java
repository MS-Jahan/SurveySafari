package com.xpinnovators.backend.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xpinnovators.backend.shop.entity.Trade;

public interface TradeRepository extends JpaRepository<Trade, String> {}
