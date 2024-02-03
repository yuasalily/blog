---
title: "vecs"
description: "rustlingsの解答集です"
page_order: 700
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## vecs
### vecs1
aと同じ要素でVecを作る
```
fn array_and_vec() -> ([i32; 4], Vec<i32>) {
    let a = [10, 20, 30, 40]; // a plain array
    let v = vec![10, 20, 30, 40]; // TODO: declare your vector here with the macro for vectors

    (a, v)
}
```
### vecs2
指示に従ってVecを操作する。
```
fn vec_loop(mut v: Vec<i32>) -> Vec<i32> {
    for element in v.iter_mut() {
        // TODO: Fill this up so that each element in the Vec `v` is
        // multiplied by 2.
        *element *= 2;
    }

    // At this point, `v` should be equal to [4, 8, 12, 16, 20].
    v
}

fn vec_map(v: &Vec<i32>) -> Vec<i32> {
    v.iter()
        .map(|element| {
            // TODO: Do the same thing as above - but instead of mutating the
            // Vec, you can just return the new number!
            element * 2
        })
        .collect()
}
```