---
title: "strings"
description: "rustlingsの解答集です"
page_order: 1100
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## strings
### strings1
stringを返すようにする。
```
fn current_favorite_color() -> String {
    "blue".to_string()
}
```
### strings2
Stringの参照を渡すとstrの参照に変換してくれる。この挙動はDerefが関連している。
```
fn main() {
    let word = String::from("green"); // Try not changing this line :)
    if is_a_color_word(&word) {
        println!("That is a color word I know!");
    } else {
        println!("That is not a color word I know.");
    }
}
```
### strings3
文字列操作のあれこれ。
```
fn trim_me(input: &str) -> String {
    // TODO: Remove whitespace from both ends of a string!
    input.trim().to_string()
}

fn compose_me(input: &str) -> String {
    // TODO: Add " world!" to the string! There's multiple ways to do this!
    format!("{} world!", input)
}

fn replace_me(input: &str) -> String {
    // TODO: Replace "cars" in the string with "balloons"!
    input.replace("cars", "balloons")
}
```
### strings4
何基準で使い分けられれているかは調べたい。
```
fn main() {
    string_slice("blue");
    string("red".to_string());
    string(String::from("hi"));
    string("rust is fun!".to_owned());
    string("nice weather".into());
    string(format!("Interpolation {}", "Station"));
    string_slice(&String::from("abc")[0..1]);
    string_slice("  hello there ".trim());
    string("Happy Monday!".to_string().replace("Mon", "Tues"));
    string("mY sHiFt KeY iS sTiCkY".to_lowercase());
}
```