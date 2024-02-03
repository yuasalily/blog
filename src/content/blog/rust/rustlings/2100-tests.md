---
title: "tests"
description: "rustlingsの解答集です"
page_order: 2100
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## tests
### tests1
assert!の使い方
```
#[cfg(test)]
mod tests {
    #[test]
    fn you_can_assert() {
        assert!(true);
    }
}
```
### tests2
assert_eq!の使い方
```
#[cfg(test)]
mod tests {
    #[test]
    fn you_can_assert_eq() {
        assert_eq!(1, 1);
    }
}
```
### tests3
is_evenのテスト追加する
```
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn is_true_when_even() {
        assert!(is_even(2));
    }

    #[test]
    fn is_false_when_odd() {
        assert!(!is_even(1));
    }
}
```
### tests4
panicはshould_panicでキャッチする
```
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn correct_width_and_height() {
        // This test should check if the rectangle is the size that we pass into its constructor
        let rect = Rectangle::new(10, 20);
        assert_eq!(rect.width, 10); // check width
        assert_eq!(rect.height, 20); // check height
    }

    #[test]
    #[should_panic(expected = "Rectangle width and height cannot be negative!")]
    fn negative_width() {
        // This test should check if program panics when we try to create rectangle with negative width
        let _rect = Rectangle::new(-10, 10);
    }

    #[test]
    #[should_panic(expected = "Rectangle width and height cannot be negative!")]
    fn negative_height() {
        // This test should check if program panics when we try to create rectangle with negative height
        let _rect = Rectangle::new(10, -10);
    }
}

```
