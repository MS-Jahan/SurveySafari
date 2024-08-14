package com.fatinsabit.surveysafari.shop.controller;

import com.fatinsabit.surveysafari.shop.service.ShopService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/shop/")
public class ShopController {
    private final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }
}
