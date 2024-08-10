package com.fatinsabit.surveysafari.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fatinsabit.surveysafari.entity.Trade;

public interface TradeRepository extends JpaRepository<Trade, String> {}
