---
title: "generics"
description: "rustlingsの解答集です"
page_order: 1700
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## generics
### generics1
型情報を与える。型情報を消してしまって推論させてもいいのでは？
```
fn main() {
    let mut shopping_list: Vec<&str> = Vec::new();
    shopping_list.push("milk");
}
```
### generics2
genericsの記法。
参考
https://zenn.dev/mebiusbox/books/22d4c1ed9b0003/viewer/8ccf20
```
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    pub fn new(value: T) -> Self {
        Wrapper { value }
    }
}
```
