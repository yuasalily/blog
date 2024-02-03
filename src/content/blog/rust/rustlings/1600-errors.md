---
title: "errors"
description: "rustlingsの解答集です"
page_order: 1600
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## errors
### errors1
エラーの処理。ちなみにResult型のEはErrorトレイとの実装を強制していないので何を入れてもいい。自分で作る場合はthiserrorクレートとかよさげ。
参考
https://qiita.com/hayao0727/items/7b3560c8958585ae361e
```
pub fn generate_nametag_text(name: String) -> Result<String, String> {
    if name.is_empty() {
        // Empty names aren't allowed.
        Err("`name` was empty; it must be nonempty.".to_string())
    } else {
        Ok(format!("Hi! My name is {}", name))
    }
}

```
### errors2
?を付けるだけ。
```
pub fn total_cost(item_quantity: &str) -> Result<i32, ParseIntError> {
    let processing_fee = 1;
    let cost_per_item = 5;
    let qty = item_quantity.parse::<i32>()?;

    Ok(qty * cost_per_item + processing_fee)
}
```
### errors3
エラーの伝播先の処理も含める
```
fn main() {
    let mut tokens = 100;
    let pretend_user_input = "8";

    let cost = total_cost(pretend_user_input).unwrap();

    if cost > tokens {
        println!("You can't afford that many!");
    } else {
        tokens -= cost;
        println!("You now have {} tokens.", tokens);
    }
}

pub fn total_cost(item_quantity: &str) -> Result<i32, ParseIntError> {
    let processing_fee = 1;
    let cost_per_item = 5;
    let qty = item_quantity.parse::<i32>()?;

    Ok(qty * cost_per_item + processing_fee)
}

```
### errors4
エラーの場合分け。thiserrorクレートでの実装も確認したい。
```
impl PositiveNonzeroInteger {
    fn new(value: i64) -> Result<PositiveNonzeroInteger, CreationError> {
        // Hmm... Why is this always returning an Ok value?
        if value == 0 {
            return Err(CreationError::Zero);
        } else if value < 0 {
            Err(CreationError::Negative)
        } else {
            Ok(PositiveNonzeroInteger(value as u64))
        }
    }
}
```
### errors5
Errorを実装しているトレイトを入れる。
```
fn main() -> Result<(), Box<dyn Error>> {
    let pretend_user_input = "42";
    let x: i64 = pretend_user_input.parse()?;
    println!("output={:?}", PositiveNonzeroInteger::new(x)?);
    Ok(())
}
```
### errors6
map_errでErrの型変換
```
impl ParsePosNonzeroError {
    fn from_creation(err: CreationError) -> ParsePosNonzeroError {
        ParsePosNonzeroError::Creation(err)
    }
    // TODO: add another error conversion function here.
    fn from_parseint(err: ParseIntError) -> ParsePosNonzeroError {
        ParsePosNonzeroError::ParseInt(err)
    }
}

fn parse_pos_nonzero(s: &str) -> Result<PositiveNonzeroInteger, ParsePosNonzeroError> {
    // TODO: change this to return an appropriate error instead of panicking
    // when `parse()` returns an error.
    let x: i64 = s.parse().map_err(ParsePosNonzeroError::from_parseint)?;
    PositiveNonzeroInteger::new(x).map_err(ParsePosNonzeroError::from_creation)
}
```
