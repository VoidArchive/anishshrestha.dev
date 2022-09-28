---
title: 'DSA in Rust: Contains Duplicate'
date: 2022-08-01
updated: 2022-09-16

excerpt: Solving contains duplicate problem in rust from best to worst solution.
categories:
  - Rust
  - DSA
---

Solving contains duplicate problem in rust from best to worst solution.

## Question

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

```
Input: nums = [1,2,3,1]
Output: true
```

## Solution

1. Blazingly Fast Solution
2. Sorting Solution
3. Brute Force Solution
4. Using Vector instead of HashSet Solution

### Blazingly Fast Solution

The best solution is to insert the element of the array in a HashSet and check if the element already exists, if it does we can return true, or else return false.

First, we need to know how to create a HashSet in rust. From the rust documentation, it can be done using the rust standard library `std::collection::HashSet`

```rust
use std::collections::HashSet;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut hashset = HashSet::new();
        for i in nums{
            if hashset.contains(&i){return true}
            hashset.insert(i);
        }
        false
    }
}
```

Declare a mutable variable HashSet to initialize a new HashSet, then check if the element is already in the set by `hashset.contains(&i)`. Notice how we need to pass `&i` instead of just `i`. If we just pass `i`, the compiler tells us to use a reference instead of i32. This is the borrow checker of rust at work. Greet error message 10/10.

Time complexity: O(n)

Space complexity: O(n)

We have reached the peak, let's go down.

### Sorting Solution

Another way to solve this problem is to sort the array and check the adjacent number to see if it's a duplicate. For that, we first need to sort the array. We can do that by using the sort method.

```rust
fn contains_duplicate(mut nums: Vec<i32>) -> bool {
    nums.sort();
    for i in 0..nums.len() - 1 {
        if nums[i] == nums[i + 1] {
            return true;
        }
    }
    false
}
```

Notice how we are using the `mut` in the function as the borrow checker won't let you borrow the nums array to change it unless it is declared to do so. Also, rust use .. for range. Similar to python range() method.

Time complexity: O(n logn)

Space complexity: O(1)

We got slower, but it's not what we wanted so let's go even slower How about the good old brute force way, by checking all elements one by one.

### Brute Force Solution

```rust
fn contains_duplicate(nums: Vec<i32>) -> bool {
    for i in 0..nums.len() {
        for j in i..nums.len() - 1 {
            if nums[i] == nums[j + 1] {
                return true;
            }
        }
    }
    false
}
```

As we are going through the array twice to check each element, the time complexity will be O(n<sup>2</sup>) but since we are not using any extra memory the space complexity is still constant. i.e O(1)

We have reached our goal.

But there is still something that was bothering me and that was vec? I thought it was the rust way of saying an array. But after a bit of digging, I found that vec is a contiguous growable array type, written as `Vec<T>`, short for ‘vector’. So basically an array that stores data on the heap and is growable, unlike arrays that are stored in stack and are fixed in size. Well if it's growable that means I can add elements to it, so what if I use a vector instead of HashSet?

## Using Vector instead of HashSet Solution

```rust
fn contains_duplicate(nums: &Vec<i32>) -> bool {
    let mut new_vector= vec![];
    for i in nums {
        if new_vector.contains(&i) {
            return true;
        }
        new_vector.push(i);
    }
    false
}
```

We are using extra memory which makes our space complexity O(n) and a vector to check for the existence of an element before adding it, then filling the vector which becomes an O(n<sup>2</sup>) operation, compared with O(n) for HashSet. It would also become an O(n<sup>2</sup>) operation if we insert each element at the start of the vector instead of at the end.

## Question I had

Before publishing this article I asked rust community for some of the question I had and here's the answer they provided.

- When do we use vector instead of HashSet?

  > Vec uses less memory than HashSet, is faster to iterate over and has guaranteed iteration order. It can be accessed by index and you can take a slice from it without copying. In most cases you should use Vec, unless you need that fast contains method.

- Why does contain method ask for &?

  > contains wants a reference because a reference is all it needs to have. There are three options here: &T (aka immutable or shared reference), &mut T (aka mutable or exclusive reference) and T. In this case, T is the value itself (not some kind of reference). These different levels of access are ordered from "lowest privilege" to "highest privilege". All of them allow reading the value of T but only T and &mut T can be used to change its value.

  > If we pass T into a function it will be moved into the function and one of two things will happen: either the value is copied and the copy is moved into the function or the the value isn't copied and we lose access to it. A move effectively transfers ownership of the value from one owning scope (body of a function or struct) to another.

  > This means there is a possibly a cost to passing "by move". Maybe want to keep the value after calling contains but to do that we have to make a copy. If T is something big, like a Vec or a String, creating a copy (or rather, a "clone" but that's not important right now) can be expensive.

  > We have ask, whether it makes sense to limited the access privileges of contains: Does a function which looks at the contents of the set and decides whether a copy of some value is contained in the set really need ownership of the value? The answer is no, since it will only need to do comparisons and that doesn't require any form of mutable access. This means &mut T and T are not necessary here which leaves us with just &T.

- Is there any other way to make this even worse?

  > If you want something that can't run in polynomial time, I'd suggest using SlowSort to sort the array and then checking if there are any duplicates by doing a linear scan. SlowSort's best case is worse-than-polynomial, so you automatically do worse than any poly-time algorithm!

_I am neither an expert on DSA nor on rust. If you found any mistake in my code or in my attempt to explain it, feel free to roast me._
