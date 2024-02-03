---
title: "move_semantics"
description: "rustlingsの解答集です"
page_order: 800
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## move_semantics
### move_semantics1
コンパイラのエラーに従ってmutを付ける。
```
#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}
```
### move_semantics2
コンパイラのエラーに従ってclone()を付ける。
```
#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0.clone());

    assert_eq!(vec0, vec![22, 44, 66]);
    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(vec: Vec<i32>) -> Vec<i32> {
    let mut vec = vec;

    vec.push(88);

    vec
}
```
### move_semantics3
コンパイラのエラーに従ってmutを付ける。関数の引数のどこにmutを付けるのかは[このページ](https://qiita.com/quercus491/items/6dea5419019778a81043)を見るとよいかも。
```
#[test]
fn main() {
    let vec0 = vec![22, 44, 66];

    let mut vec1 = fill_vec(vec0);

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

fn fill_vec(mut vec: Vec<i32>) -> Vec<i32> {
    vec.push(88);

    vec
}
```
### move_semantics4
fill_vec内でベクトルを生成する。
```
#[test]
fn main() {
    let mut vec1 = fill_vec();

    assert_eq!(vec1, vec![22, 44, 66, 88]);
}

// `fill_vec()` no longer takes `vec: Vec<i32>` as argument - don't change this!
fn fill_vec() -> Vec<i32> {
    // Instead, let's create and fill the Vec in here - how do you do that?
    let mut vec = vec![22, 44, 66];

    vec.push(88);

    vec
}
```
### move_semantics5
可変参照は同時に2つ持てないというやつ。可変参照は最後に使用されるところまで生き残るので、*yが使われた後にzを作成するようにする。
```
#[test]
fn main() {
    let mut x = 100;
    let y = &mut x;
    *y += 100;
    let z = &mut x;
    *z += 1000;
    assert_eq!(x, 1200);
}
```
### move_semantics6
コメントの指示通りに所有権を渡したり渡さなかったりする。
```
fn main() {
    let data = "Rust is great!".to_string();

    get_char(&data);

    string_uppercase(data);
}

// Should not take ownership
fn get_char(data: &String) -> char {
    data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: String) {
    data = data.to_uppercase();

    println!("{}", data);
}
```