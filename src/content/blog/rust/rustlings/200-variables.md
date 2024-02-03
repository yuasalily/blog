---
title: "variables"
description: "rustlingsの解答集です"
page_order: 200
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## variables
### variables1
letが抜けているので追加する。
```
fn main() {
    let x = 5;
    println!("x has the value {}", x);
}
```

### variables2
rustでは初期化されていない値を使うことは禁止されているので、xを初期化する。
```
fn main() {
    let x = 0;
    if x == 10 {
        println!("x is ten!");
    } else {
        println!("x is not ten!");
    }
}
```

### variables3
rustでは初期化されていない値を使うことは禁止されているので、xを初期化する。[variables2](#variables2)も同じことをしたけれど何か別の意図があったりするんだろうか。
```
fn main() {
    let x: i32 = 0;
    println!("Number {}", x);
}
```

### variables4
変数を可変にするためにmutを付ける。
```
fn main() {
    let mut x = 3;
    println!("Number {}", x);
    x = 5; // don't change this line
    println!("Number {}", x);
}
```

### variables5
いわゆるshadowingというやつ。shadowingのメリットは変数が不変であることが保証されていること([参考](https://zenn.dev/freeserver/articles/e9d91d3dab9577))や変数名をたくさん考えなくてよいことがある([参考](https://dev.classmethod.jp/articles/trpl-study-meeting-report-part3/))。
```
fn main() {
    let number = "T-H-R-E-E"; // don't change this line
    println!("Spell a Number : {}", number);
    let number = 3; // don't rename this variable
    println!("Number plus two is : {}", number + 2);
}
```
### variables6
constを使うときは必ず型情報が必要なのでつける。数値型ならなんでもよさそうなので適当にi32。
```
const NUMBER: i32 = 3;
fn main() {
    println!("Number {}", NUMBER);
}
```