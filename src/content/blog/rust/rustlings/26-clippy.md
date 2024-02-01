---
title: "clippy"
description: "rustlingsの解答集です"
page_number: 26
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## clippy
### clippy1
円周率は用意されているものを使う
```
fn main() {
    let radius = 5.00f32;

    let area = f32::consts::PI * f32::powi(radius, 2);

    println!(
        "The area of a circle with radius {:.2} is {:.5}!",
        radius, area
    )
}
```
### clippy2
if letを使う
```
fn main() {
    let mut res = 42;
    let option = Some(12);
    if let Some(x) = option {
        res += x;
    }
    println!("{}", res);
}
```
### clippy3
コンパイルエラーの指示通りに直していく
```
fn main() {
    let my_option: Option<()> = None;
    if let Some(x) = my_option {};

    let my_arr = &[-1, -2, -3, -4, -5, -6];
    println!("My array! Here it is: {:?}", my_arr);

    let mut my_empty_vec = vec![1, 2, 3, 4, 5];
    my_empty_vec.clear();
    println!("This Vec is empty, see? {:?}", my_empty_vec);

    let mut value_a = 45;
    let mut value_b = 66;
    // Let's swap these two!
    std::mem::swap(&mut value_a, &mut value_b);
    println!("value a: {}; value b: {}", value_a, value_b);
}
```
