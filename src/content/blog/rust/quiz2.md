---
title: "quiz2"
description: "rustlingsの解答集です"
page_number: 14
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## quiz2
総集編
```
mod my_module {
    use super::Command;

    // TODO: Complete the function signature!
    pub fn transformer(input: Vec<(String, Command)>) -> Vec<String> {
        // TODO: Complete the output declaration!
        let mut output: Vec<String> = vec![];
        for (string, command) in input.iter() {
            // TODO: Complete the function body. You can do it!
            let res = match command {
                Command::Uppercase => string.to_uppercase(),
                Command::Trim => string.trim().to_string(),
                Command::Append(times) => {
                    format!("{}{}", string, "bar".to_string().repeat(*times))
                }
            };
            output.push(res);
        }
        output
    }
}

#[cfg(test)]
mod tests {
    // TODO: What do we need to import to have `transformer` in scope?
    use super::my_module::transformer;
    use super::Command;

    #[test]
    fn it_works() {
        let output = transformer(vec![
            ("hello".into(), Command::Uppercase),
            (" all roads lead to rome! ".into(), Command::Trim),
            ("foo".into(), Command::Append(1)),
            ("bar".into(), Command::Append(5)),
        ]);
        assert_eq!(output[0], "HELLO");
        assert_eq!(output[1], "all roads lead to rome!");
        assert_eq!(output[2], "foobar");
        assert_eq!(output[3], "barbarbarbarbarbar");
    }
}

```