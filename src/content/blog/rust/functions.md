---
title: "functions"
description: "rustlingsの解答集です"
page_number: 3
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## functions
### functions1
call_meが定義されていないので実装する。中身は適当。
```
fn call_me() {
    println!("How dare you call me!")
}

fn main() {
    call_me();
}
```
### functions2
関数の引数に型情報がないので適当に整数型を付ける。forで使われているので当然f32とかはエラーになる。
```
fn main() {
    call_me(3);
}

fn call_me(num: i32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```
### functions3
引数が渡されていないので適当に数字を埋める。
```
fn main() {
    call_me(2);
}

fn call_me(num: u32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```
### functions4
返り値の型情報がないので付け加える。
```
fn main() {
    let original_price = 51;
    println!("Your sale price is {}", sale_price(original_price));
}

fn sale_price(price: i32) -> i32 {
    if is_even(price) {
        price - 10
    } else {
        price - 3
    }
}

fn is_even(num: i32) -> bool {
    num % 2 == 0
}
```
### functions5
関数の最後に;がついていると値が帰らないので消す。ChatGPTにreturnを明示するかしないかについて聞いてみると、明確には定められていないのでチームで相談しろとのこと。調べてみても明確な記載がなかったのできっとそうなんだと思う。
```
fn main() {
    let answer = square(3);
    println!("The square of 3 is {}", answer);
}

fn square(num: i32) -> i32 {
    num * num
}
```