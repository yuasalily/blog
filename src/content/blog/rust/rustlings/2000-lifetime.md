---
title: "lifetime"
description: "rustlingsの解答集です"
page_order: 2000
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## lifetime
### lifetime1
```
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```
### lifetime2
```
fn main() {
    let string1 = String::from("long string is long");
    let result;
    let string2 = String::from("xyz");
    {
        result = longest(string1.as_str(), string2.as_str());
    }
    println!("The longest string is '{}'", result);
}
```
### lifetime3
```
struct Book<'a> {
    author: &'a str,
    title: &'a str,
}
```
