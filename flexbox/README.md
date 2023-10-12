# Flexbox (Flexible Box Layout)

Flexbox is a powerful layout model in CSS that simplifies the design and distribution of space within a container and the arrangement of items within that container. It provides an efficient way to create complex and responsive layouts.

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Concepts](#basic-concepts)
3. [Properties](#properties)
4. [Examples](#examples)
5. [Browser Support](#browser-support)
6. [Resources](#resources)

## Introduction

Flexbox, officially known as the CSS Flexible Box Layout Module, is designed to distribute space along a single axis or distribute space between items in a container and align them within that container. It is particularly useful for creating responsive designs and aligning items in a predictable and scalable way.

## Basic Concepts

### Flex Container

- `display: flex` or `display: inline-flex`: These properties turn an element into a flex container.

### Flex Items

- Child elements of a flex container are known as flex items.

### Main Axis and Cross Axis

- In a flex container, the main axis is the primary axis, and the cross axis is perpendicular to it.

### Flex Direction

- `flex-direction` defines the direction in which flex items are placed within the flex container. It can be `row`, `row-reverse`, `column`, or `column-reverse`.

### Justify Content

- `justify-content` aligns items along the main axis within the container. Options include `flex-start`, `flex-end`, `center`, and more.

### Align Items

- `align-items` aligns items along the cross-axis. Common values include `stretch`, `center`, `flex-start`, and `flex-end`.

### Align Self

- `align-self` allows individual flex items to override the `align-items` property for alignment along the cross-axis.

### Flex

- `flex` is a shorthand property to set `flex-grow`, `flex-shrink`, and `flex-basis` properties.

### Order

- `order` specifies the order in which flex items are displayed within the flex container.

## Properties

A comprehensive list of properties:

- `display: flex;`
- `display: inline-flex;`
- `flex-direction: row;`
- `flex-direction: row-reverse;`
- `flex-direction: column;`
- `flex-direction: column-reverse;`
- `justify-content: flex-start;`
- `justify-content: flex-end;`
- `justify-content: center;`
- `justify-content: space-between;`
- `justify-content: space-around;`
- `align-items: stretch;`
- `align-items: flex-start;`
- `align-items: flex-end;`
- `align-items: center;`
- `align-self: auto;`
- `align-self: flex-start;`
- `align-self: flex-end;`
- `flex: none;`
- `order: 0;`

## Examples

Here are some common use cases and examples of using Flexbox for various layouts. You can find these in the [examples](examples) directory.

1. [Basic Horizontal Layout](examples/basic-horizontal-layout.html)
2. [Vertical Centering](examples/vertical-centering.html)
3. [Equal Height Columns](examples/equal-height-columns.html)

## Browser Support

Flexbox has good support in modern browsers. However, it's essential to consider browser compatibility when implementing it in production. You can check the [Can I use](https://caniuse.com) website for the latest information on browser support.

## Resources

- [MDN Web Docs - CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/): An interactive game to learn Flexbox.

Feel free to explore the examples, experiment, and create your own Flexbox layouts. Flexbox is a powerful tool for creating flexible and responsive designs, and it's worth mastering for modern web development.
