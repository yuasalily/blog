---
title: "conversions"
description: "rustlingsの解答集です"
page_number: 27
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## conversions
### using_as
```
fn average(values: &[f64]) -> f64 {
    let total = values.iter().sum::<f64>();
    total / values.len() as f64
}
```
### from_into
Fromトレイトを実装していく
```
impl From<&str> for Person {
    fn from(s: &str) -> Person {
        if s.is_empty() {
            Person::default()
        } else {
            let mut iter = s.split(',');
            let name = match iter.next() {
                Some("") | None => return Person::default(),
                Some(x) => String::from(x)
            };
            let age = match iter.next() {
                Some(x) => match x.parse::<usize>() {
                    Ok(x) => x,
                    Err(_) => return Person::default(),
                },
                None => return Person::default(),
            };
            Person{name, age}
        }
    }
}
```
### from_str
FromStrトレイトを実装していく
```
impl FromStr for Person {
    type Err = ParsePersonError;
    fn from_str(s: &str) -> Result<Person, Self::Err> {
        if s.is_empty() {
            Err(ParsePersonError::Empty)?
        }
        let mut iter = s.split(',');
        let name = String::from(iter.next().unwrap());
        if name.is_empty() {
            Err(ParsePersonError::NoName)?
        };
        let age = iter
            .next()
            .ok_or(ParsePersonError::BadLen)?
            .parse()
            .map_err(ParsePersonError::ParseInt)?;
        if let Some(x) = iter.next() {
            Err(ParsePersonError::BadLen)?
        };
        Ok(Person { name, age })
    }
}
```
### try_from_into
TryFromトレイトを実装していく
```
// Tuple implementation
impl TryFrom<(i16, i16, i16)> for Color {
    type Error = IntoColorError;
    fn try_from(tuple: (i16, i16, i16)) -> Result<Self, Self::Error> {
        let (r, g, b) = tuple;
        let (red, green, blue) = (u8::try_from(r).or(Err(IntoColorError::IntConversion))?,
	    	  	       	  u8::try_from(g).or(Err(IntoColorError::IntConversion))?,
				  u8::try_from(b).or(Err(IntoColorError::IntConversion))?);
        Ok(Color{red, green, blue})
    }
}

// Array implementation
impl TryFrom<[i16; 3]> for Color {
    type Error = IntoColorError;
    fn try_from(arr: [i16; 3]) -> Result<Self, Self::Error> {
        let [r, g, b] = arr;
        (r, g, b).try_into()
    }
}

// Slice implementation
impl TryFrom<&[i16]> for Color {
    type Error = IntoColorError;
    fn try_from(slice: &[i16]) -> Result<Self, Self::Error> {
        match slice {
            [r, g, b] => Color::try_from((*r, *g, *b)),
            _ => Err(IntoColorError::BadLen)?
        }
    }
}

```
### as_ref_mut
AsRef実装
```
// Obtain the number of bytes (not characters) in the given argument.
// TODO: Add the AsRef trait appropriately as a trait bound.
fn byte_counter<T: AsRef<str>>(arg: T) -> usize {
    arg.as_ref().as_bytes().len()
}

// Obtain the number of characters (not bytes) in the given argument.
// TODO: Add the AsRef trait appropriately as a trait bound.
fn char_counter<T: AsRef<str>>(arg: T) -> usize {
    arg.as_ref().chars().count()
}

// Squares a number using as_mut().
// TODO: Add the appropriate trait bound.
fn num_sq<T: AsMut<u32>>(arg: &mut T) {
    // TODO: Implement the function body.
    *arg.as_mut() = *arg.as_mut() * *arg.as_mut();
}
```
