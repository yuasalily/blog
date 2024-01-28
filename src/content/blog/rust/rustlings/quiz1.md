---
title: "quiz1"
description: "rustlingsの解答集です"
page_number: 5
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## quiz1
問題設定そのまま実装する。
```
fn calculate_price_of_apples(quantity: u32) -> u32 {
    if quantity > 40 {
        quantity
    } else {
        quantity * 2
    }
}
```