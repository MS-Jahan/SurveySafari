package com.fatinsabit.surveysafari.shop.service;

import com.fatinsabit.surveysafari.shop.repository.RedeemItemRepository;
import com.fatinsabit.surveysafari.shop.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ShopService {

    @Autowired
    private RedeemItemRepository redeemItemRepository;
    @Autowired
    private TradeRepository tradeRepository;
}
