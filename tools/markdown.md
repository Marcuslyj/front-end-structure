### What is Markdown?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.
### How to use?
1. Creae a file with the .md or .markdown extension
2. Writing with markdown Syntax
### Syntax guide
#### Headers

```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```
#### Emphasis

_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_

```
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```
#### Lists
##### Unordered
- Item 1
- Item 2
  - Item 2a
  - Item 2b

```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```
##### Ordered
1. Item 1
2. Item 2
3. Item 3
   - Item 3a
   - Item 3b

```
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b
```
#### Images

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

```
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```
#### Links

http://github.com - automatic!
[GitHub](http://github.com)

```
http://github.com - automatic!
[GitHub](http://github.com)
```
#### Blockquotes

As Kanye West said:

> We're living the future so
> the present is our past.

```
As Kanye West said:

> We're living the future so
> the present is our past.
```
#### Inline code

I think you should use an
`<addr>` element here instead.

```
I think you should use an
`<addr>` element here instead.
```
#### Syntax highlighting

```
` ``javascript/js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
` ``
```

```
` ``html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body> 
</body>
</html>
` ``
```

```
` ``css
body {
// ...
}
` ``
```
#### Task Lists
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```
#### Tables

You can create tables by assembling a list of words and dividing them with hyphens - (for the first row), and then separating each column with a pipe |:

| First Header | Second Header |
| --- | --- |
| Content from cell 1 | Content from cell 2 |
| Content in the first column | Content in the second column |

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```
#### Strikethrough

~~this~~(like`~~this~~`)
#### Emoji

GitHub supports emoji!
:sparkles: :camel: :boom:(like`:sparkles: :camel: :boom:`)

To see a list of every image we support, check out the [Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/).
