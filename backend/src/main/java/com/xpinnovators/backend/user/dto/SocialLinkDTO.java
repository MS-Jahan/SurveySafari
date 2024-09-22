package com.xpinnovators.backend.user.dto;

import com.xpinnovators.backend.user.entity.SocialLink;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SocialLinkDTO {
    private String platform;
    private String link;

    public SocialLinkDTO(SocialLink socialLink) {
        this.platform = socialLink.getPlatform();
        this.link = socialLink.getLink();
    }
}