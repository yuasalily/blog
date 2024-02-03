---
title: "macros"
description: "rustlingsの解答集です"
page_order: 2500
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## macros
### macros1
!を付けるだけ。
```
fn main() {
    my_macro!();
}
```
### macros2
順番を変えるだけ。
```
macro_rules! my_macro {
    () => {
        println!("Check out my macro!");
    };
}

fn main() {
    my_macro!();
}
```
### macros3
#[macro_use]を付けるだけ。
```
#[macro_use]
mod macros {
    macro_rules! my_macro {
        () => {
            println!("Check out my macro!");
        };
    }
}
```
### macros4
;を付けるだけ。
```
#[rustfmt::skip]
macro_rules! my_macro {
    () => {
        println!("Check out my macro!");
    };
    ($val:expr) => {
        println!("Look at this other macro: {}", $val);
    }
}
```
