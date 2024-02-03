---
title: "modules"
description: "rustlingsの解答集です"
page_order: 1200
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## modules
### modules1
pubを付ける。
```
mod sausage_factory {
    // Don't let anybody outside of this module see this!
    fn get_secret_recipe() -> String {
        String::from("Ginger")
    }

    pub fn make_sausage() {
        get_secret_recipe();
        println!("sausage!");
    }
}
```
### modules2
asでuseのpathを書き換える。
```
mod delicious_snacks {
    // TODO: Fix these use statements
    pub use self::fruits::PEAR as fruit;
    pub use self::veggies::CUCUMBER as veggie;

    mod fruits {
        pub const PEAR: &'static str = "Pear";
        pub const APPLE: &'static str = "Apple";
    }

    mod veggies {
        pub const CUCUMBER: &'static str = "Cucumber";
        pub const CARROT: &'static str = "Carrot";
    }
}
```
### modules3
標準ライブラリから読み込むだけ。
```
use std::time::{SystemTime, UNIX_EPOCH};
```