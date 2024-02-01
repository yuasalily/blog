---
title: "hashmaps"
description: "rustlingsの解答集です"
page_number: 13
page_kind: "rustlings"
is_content_index: false
tags: ["rust", "rustlings"]
---

## hashmaps
### hashmaps1
hashmapの基本的な操作。
```
fn fruit_basket() -> HashMap<String, u32> {
    let mut basket = HashMap::new(); // TODO: declare your hash map here.

    // Two bananas are already given for you :)
    basket.insert(String::from("banana"), 2);

    // TODO: Put more fruits in your basket here.
    basket.insert(String::from("super banana"), 2);
    basket.insert(String::from("hyper banana"), 2);

    basket
}
```
### hashmaps2
or_insertで値が存在しない時だけ適当に埋める
```
fn fruit_basket(basket: &mut HashMap<Fruit, u32>) {
    let fruit_kinds = vec![
        Fruit::Apple,
        Fruit::Banana,
        Fruit::Mango,
        Fruit::Lychee,
        Fruit::Pineapple,
    ];

    for fruit in fruit_kinds {
        basket.entry(fruit).or_insert(10);
    }
}
```
### hashmaps3
Teamにimplを実装しちゃう。参照のあれこれは整理する
```
struct Team {
    goals_scored: u8,
    goals_conceded: u8,
}

impl Team {
    fn add(&mut self, scored: u8, conceded: u8) {
        self.goals_scored += scored;
        self.goals_conceded += conceded;
    }
}

fn build_scores_table(results: String) -> HashMap<String, Team> {
    // The name of the team is the key and its associated struct is the value.
    let mut scores: HashMap<String, Team> = HashMap::new();

    for r in results.lines() {
        let v: Vec<&str> = r.split(',').collect();
        let team_1_name = v[0].to_string();
        let team_1_score: u8 = v[2].parse().unwrap();
        let team_2_name = v[1].to_string();
        let team_2_score: u8 = v[3].parse().unwrap();

        let team1 = scores.entry(team_1_name).or_insert(Team {
            goals_scored: 0,
            goals_conceded: 0,
        });
        team1.add(team_1_score, team_2_score);
        let team2 = scores.entry(team_2_name).or_insert(Team {
            goals_scored: 0,
            goals_conceded: 0,
        });
        team2.add(team_2_score, team_1_score);
    }
    scores
}
```