---
title: "enums"
description: "rustlingsの解答集です"
page_number: 10
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## enums
### enums1
enumの中身を実装する。
```
#[derive(Debug)]
enum Message {
    // TODO: define a few types of messages as used below
    Quit,
    Echo,
    Move,
    ChangeColor,
}
```
### enums2
enumの要素をstructみたいにできる
```
enum Message {
    // TODO: define the different variants used below
    Move { x: i32, y: i32 },
    Echo(String),
    ChangeColor(u8, u8, u8),
    Quit,
}
```
### enums3
matchを使ってenumの中身を取り出して処理する。
```
enum Message {
    Move(Point),
    Echo(String),
    ChangeColor(u8, u8, u8),
    Quit,
}

struct Point {
    x: u8,
    y: u8,
}

struct State {
    color: (u8, u8, u8),
    position: Point,
    quit: bool,
    message: String,
}

impl State {
    fn change_color(&mut self, color: (u8, u8, u8)) {
        self.color = color;
    }

    fn quit(&mut self) {
        self.quit = true;
    }

    fn echo(&mut self, s: String) {
        self.message = s
    }

    fn move_position(&mut self, p: Point) {
        self.position = p;
    }

    fn process(&mut self, message: Message) {
        match message {
            Message::Move(point) => self.move_position(point),
            Message::Echo(string) => self.echo(string),
            Message::ChangeColor(r, g, b) => self.change_color((r, g, b)),
            Message::Quit => self.quit(),
        }
    }
}
```