---
title: "traits"
description: "rustlingsの解答集です"
page_order: 1800
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## traits
### traits1
append_barを実装する。
```
impl AppendBar for String {
    // TODO: Implement `AppendBar` for type `String`.
    fn append_bar(self) -> Self {
        format!("{}Bar", self)
    }
}
```
### traits2
Vec<String>に実装するだけ。
```
impl AppendBar for Vec<String> {
    fn append_bar(mut self) -> Self {
        self.push(String::from("Bar"));
        self
    }
}
```
### traits3
```
pub trait Licensed {
    fn licensing_info(&self) -> String {
        String::from("Some information")
    }
}
```
### traits4
静的ディスパッチというやつ。dynとの区別はしっかりしたい。
参考
https://doc.rust-jp.rs/rust-by-example-ja/trait/dyn.html
```
fn compare_license_types(software: impl Licensed, software_two: impl Licensed) -> bool {
    software.licensing_info() == software_two.licensing_info()
}
```
### traits5
トレイと境界というやつ。
```
fn some_func(item: impl SomeTrait + OtherTrait) -> bool {
    item.some_function() && item.other_function()
}
```
