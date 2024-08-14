package com.xpinnovators.backend.shop.service;

import com.xpinnovators.backend.shop.repository.RedeemItemRepository;
import com.xpinnovators.backend.shop.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShopService {

    @Autowired
    private RedeemItemRepository redeemItemRepository;
    @Autowired
    private TradeRepository tradeRepository;
}
