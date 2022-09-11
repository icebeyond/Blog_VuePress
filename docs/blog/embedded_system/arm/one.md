---
title: Markdown语法
toc: true
sidebar: auto
---

特别声明: 本文来源于[Markdown中文文档](https://markdown-zh.readthedocs.io/en/latest/), 感谢文档提供者!

## 概述

​	Markdown 视可读性为最高准则. Markdown 文件应该以纯文本形式原样发布, 不应该包含标记标签和格式化指令. 尽管 Markdown 的语法受到了以下这些 text-to-HTML 过滤器的影响 -- 包括 [Setext](http://docutils.sourceforge.net/mirror/setext.html), [atx](http://www.aaronsw.com/2002/atx/), [Textile](http://textism.com/tools/textile/), [reStructuredText](http://docutils.sourceforge.net/rst.html), [Grutatext](http://www.triptico.com/software/grutatxt.html), 还有 [EtText](http://ettext.taint.org/doc/) -- 但是 Markdown 语法灵感最大的来源还是纯文本 email 的格式.

​	基于以上背景, Markdown 完全由标点符号组成, 这些标点经过仔细挑选以使他们看上去和表达的含义相同. 例如, 星号标记的单词就像 *强调*. 列表就像是列表. 如果你使用过 email 的话, 就连块引用都像引用的文本段落.

​	对于 Markdown 中未包含的标签, 可以直接使用 HTML. 没有必要使用定界符或标识符来表明从 Markdown 切换到 HTML; 直接使用标签就行了.

​	唯一的限制就是对于 HTML 块级元素 -- 像 `<div>`, `<table>`, `<pre>`, `<p>`, 等等. -- 必须另起一行单独放 , 并且开始和结束标签前面不能有任何缩进. Markdown 会自动识别这些块级元素而不会在他们周围添加额外的 `<p>` 标签.

## 块级元素

### 段落和换行

段落就是连续行上的文本, 一个或多个空行划分不同的段落. (空行的含义就只要是看起来是空行就行了 -- 即使包含了 spaces 或者 等空白符也是空行.) 普通段落不应该使用缩进.

段落是由一行或多行连续文本组成的, 这条规则使得 Markdown 支持 "硬换行". 这个其他的文本到HTML转换器有很大不同 (包括 Movable Type 的 "Convert Line Breaks" 选项) , 通常这些转换器会将段落中的每个换行都转换为一个 `<br />` 标签.

当你 *确实需要* 在 Markdown 中输入 `<br />` 标签, 只需要在行尾加上两个及以上的空格, 然后换行.

确实, 这样输入 `<br />` 麻烦了一点, 但是 "换行即 `<br />`" 的规则并不适用于 Markdown. 这时, 用硬换行来格式化 Markdown 中 email 式的 [blockquoting](https://markdown-zh.readthedocs.io/en/latest/blockelements/#blockquote) 以及多段落 [list items](https://markdown-zh.readthedocs.io/en/latest/blockelements/#list) 或许是更好的选择.

### 标题

Markdown 支持两种形式的标题, [Setext] [1] 和 [atx] [2].

Setext 样式的标题使用的等号来表示一级标题, 使用连字符表示二级标题. 例如:

```markdown
This is an H1
=============

This is an H2
-------------
```

任意长度的 `=` 或 `-` 都是可以的.

Atx 样式的标题每行开头使用 1-6 井号, 对应 1-6 级标题. 例如:

```markdown
# This is an H1

## This is an H2

###### This is an H6
```

可选地, 你可以 "关闭" atx 样式的标题. 这纯粹是美化需要 -- 如果你认为这样美观一些就用吧. 关闭标签的井号数量甚至不需要和起始位置的匹配. (起始的井号数量决定了标题的级别.) :

```markdown
# This is an H1 #

## This is an H2 ##

### This is an H3 ######
```

### 块引用

Markdown 使用 email 样式的 `>` 字符作为块引用. 如果你熟悉 email 消息中的引用段落, 那么你同样可以在 Markdown 中创建块引用. 最好对引用文本采取强制换行并在每一行行首放一个 `>` :

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Markdown 中可以简便地只在每一个需要强制换行的段落的首行前面加上一个 `>` :

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
```

块引用可以嵌套 (例如, 块引用中包含块引用) , 只需添加额外层级的 `>` 即可:

```markdown
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

块引用可以包含 Markdown 元素, 包括标题, 列表和代码块:

```markdown
> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");
```

任何合适的文本编辑器都应该可以很方便的创建 email 样式的块引用. 例如, 用 BBEdit 就可以选取文本然后从 'Text' 菜单中选择 'Increase Quote Level'.

### 列表

Markdown 支持有序列表和无序列表.

无序列表使用星号, 加号, 和连字符 -- 这些符号是可互换的 -- 最为列表标记:

```markdown
*   Red
*   Green
*   Blue
```

等价于:

```markdown
+   Red
+   Green
+   Blue
```

以及:

```markdown
-   Red
-   Green
-   Blue
```

有序列表使用数字加句号:

```markdown
1.  Bird
2.  McHale
3.  Parish
```

需要注意的是这里的数字序号对于最终生成 HTML 是没有影响的. 这里 Markdown 输出的 HTML 列表是:

```markdown
<ol>
<li>Bird</li>
<li>McHale</li>
<li>Parish</li>
</ol>
```

即使你把列表写成这样:

```markdown
1.  Bird
1.  McHale
1.  Parish
```

甚至这样:

```markdown
3. Bird
1. McHale
8. Parish
```

你都讲得到相同的 HTML 输出. 重点是, 如果你希望你的 Markdown 源码中的列表序号匹配输出的 HTML 列表序号, 你应该使用正常的序号 . 当然, 如果你想简单点, 也可不必这么做.

即使你使用错误的列表序号, 最终生成的列表仍然会以序号 1 开始. 在未来的版本里, Markdown 可能支持以任意数字作为列表起始序号.

List 标记通常从左边开始, 可以用三个及以上的空格来缩进. List 标记后面应该跟一个以上的空格或者一个水平制表符.

为了使列表更美观, 可以用悬挂缩进来格式化列表项:

```markdown
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.
```

但是这不是必须的:

```markdown
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
```

如果列表项中包含空行, Markdown 会在 HTML 输出中用 `<p>` 来包裹他们. 例如, 下面的输入:

```markdown
*   Bird
*   Magic
```

会输出:

```markdown
<ul>
<li>Bird</li>
<li>Magic</li>
</ul>
```

但是:

```markdown
*   Bird

*   Magic
```

会输出:

```markdown
<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>
```

列表项可能包含多个段落. 列表项中的每个段落都必须用 4 个空格或一个水平制表符来缩进:

```markdown
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

同上, 悬挂缩进只是为了更美观, 而非强制要求:

```markdown
*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.
```

如果列表项中包含块注释 , 块注释标记 `>` 需要缩进:

```markdown
*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
```

如果列表项中有代码块, 代码块需要 *双倍* 缩进-- 8 个空格或者两个水平制表符:

```markdown
*   A list item with a code block:

        <code goes here>
```

有时候无意中出发有序列表, 如下面这样的代码:

```markdown
1986. What a great season.
```

即使, 如果一行开头满足 *number-period-space* 模式. 可以通过转义点号来避免这种情况:

```markdown
1986\. What a great season.
```

### 代码块

预格式化的代码块用于输出编程语言和标记语言. 不同于普通段落, 代码块中的行会被原样呈现. Markdown 会用 `<pre>` 和 `<code>` 标签包围代码块.

要在 Markdown 中插入代码块, 只需要将每一行都缩进 4 个空格或者 1 个水平制表符. 例如, 下面的输入:

```markdown
This is a normal paragraph:

    This is a code block.
```

Markdown 会生成:

```markdown
<p>This is a normal paragraph:</p>

<pre><code>This is a code block.
</code></pre>
```

只有一级缩进 -- 4 个空格或者 1 个水平制表符 -- 会从代码块中的每一行中移除. 例如:

```markdown
Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell
```

会生成:

```markdown
<p>Here is an example of AppleScript:</p>

<pre><code>tell application "Foo"
    beep
end tell
</code></pre>
```

代码块自动扩展直到碰到未使用缩进的文本 (或者文章结尾).

在代码块内, 英镑符号 (`&`) 和尖括号 (`<` 和 `>`) 或自动转换为 HTML 字符实体. 这使得用 Markdown 包含 HTML 代码非常容易 -- 只需粘贴并缩进, Markdown 会自动转换字符实体. 例如:

```markdown
    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>
```

会生成:

```markdown
<pre><code>&lt;div class="footer"&gt;
    &amp;copy; 2004 Foo Corporation
&lt;/div&gt;
</code></pre>
```

Markdown 的语法在代码块中是无效的的. 例如, 代码块中的星号只是它的字面量而已. 这使得用 Markdown 来书写 Markdown 自身的语法很容易.

### 水平线

如果一行中只有三个以上的连字符, 星号, 或者下划线则会在该位置生成一个 `<hr />` 标签. 星号和连字符之间的空格也是允许的. 下面的例子都会生成一条水平线:

```markdown
* * *

***

*****

- - -

---------------------------------------
```

## 内联元素

### 链接

Markdown 支持两种链接形式: *内联* 和 *引用*.

这两种形式下链接文本的定界符都是 [中括号].

要创建内联链接, 只需在链接文本的右括号后面紧接一对圆括号. 圆括号里面放所需的 URL 链接, 还可以放一个 *可选* 的链接标题, 标题要用引号包围. 例如:

```markdown
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

将会生成:

```markdown
<p>This is <a href="http://example.com/" title="Title">
an example</a> inline link.</p>

<p><a href="http://example.net/">This link</a> has no
title attribute.</p>
```

如果是引用相同服务器下的本地资源, 还可以用相对路径:

```markdown
See my [About](/about/) page for details.
```

引用类型的链接放在第二个中括号里, 括号里面放链接标签:

```markdown
This is [an example][id] reference-style link.
```

两个中括号之间可以有空格:

```markdown
This is [an example] [id] reference-style link.
```

接下来, 在文档中的任意位置, 你可以像下面那样定义链接标签, 需要单独占一行:

```markdown
[id]: http://example.com/  "Optional Title Here"
```

也就是:

- 方括号中包含链接标识符 (可以用三个以上的空白符来添加缩进);
- 跟着是冒号;
- 跟着是一个以上的空白符和水平制表符;
- 跟着是链接的 URL;
- 跟着是可选的标题属性, 可以用单引号, 双引号, 或者圆括号包围.

以下三个链接的定义是等价的:

```markdown
[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)
```

**注意:** Markdown.pl 1.0.1 有一个已知的问题就是不能用单引号来包围链接标题.

URL 可以用尖括号包围:

```markdown
[id]: <http://example.com/>  "Optional Title Here"
```

对于较长的 URL , 为了美观起见, 你可以另起一行放置链接标题, 需要在前面加额外的水平制表符或空格作为内间距:

```markdown
[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"
```

链接定义只存在于 Markdown 处理期间, 而不会在最终的 HTML 出现.

链接定义的名称可以包含字母, 数字, 空格, 和标点符号 -- 但它们 *不是* 大小写敏感的. 例如, 下面两个链接是等价的:

```markdown
[link text][a]
[link text][A]
```

*隐含链接名称* 使你可以忽略链接名称, 这时链接文本本身被用于链接名称. 只用一对空的中括号就可以了 -- 例如, 要链接 "Google" 这个词到 google.com 网站, 你只用这样写:

```markdown
[Google][]
```

同时这样定义链接:

```markdown
[Google]: http://google.com/
```

由于链接名称可以包含空格, 甚至链接文本中包含多个单词时这种快捷方式也是可行的:

```markdown
Visit [Daring Fireball][] for more information.
```

链接定义如下:

```markdown
[Daring Fireball]: http://daringfireball.net/
```

链接定义可以放在 Markdown 文档的任意位置. 一般倾向于将它们直接放在引用位置下面, 当然, 也可以像底部注释那样, 将它们都放在文档底部.

下面是一个引用链接实例:

```markdown
I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
```

要使用默认链接, 可以这样写:

```markdown
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"
```

上面两个例子都会输出以下 HTML:

```markdown
<p>I get 10 times more traffic from <a href="http://google.com/"
title="Google">Google</a> than from
<a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>
```

作为对比, 下面是用 Markdown 内联链接的效果:

```markdown
I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
```

引用连接的意义不在于更容易书写, 而在于使得文档更易于阅读. 比较上面两个例子: 使用引用链接的段落只有 81 个字符; 使用内联链接的段落有 176 个字符; 而原始的 HTML 有 234 个字符. 在原始的 HTML 中, 标记比文本还多.

使用 Markdown 的引用链接, 源码更接近与最终的输出, 就像浏览器中呈现的样子. 通过把标记元数据移出段落, 你可以不用打断行文而直接添加链接.

### 强调

Markdown 将星号 (`*`) 和下划线 (`_`) 作为强调标记. 用 `*` 或者 `_` 包裹的文本将会用 HTML `<em>` 标签包裹; 双 `*` 或者 `_` 将会用 HTML `<strong>` 标签包裹. 例如, 下面的输入:

```markdown
*single asterisks*

_single underscores_

**double asterisks**

__double underscores__
```

会输出:

```markdown
<em>single asterisks</em>

<em>single underscores</em>

<strong>double asterisks</strong>

<strong>double underscores</strong>
```

两种形式可以任意选择, 但是同一片段的开关标记必须一致.

强调可以用在单词中:

```markdown
un*frigging*believable
```

但是如果 `*` 或者 `_` 两边都有空格, 则会被视为星号和下划线的字面量.

要使用星号和下划线字面量, 需要进行转义, 以区别于强调:

```markdown
\*this text is surrounded by literal asterisks\*
```

### 代码

要输出一个代码片段, 需要使用重音符号 (```). 不同于预格式的代码块, 代码片段只是在普通段落中标识出代码. 例如:

```markdown
Use the `printf()` function.
```

会生成:

```markdown
<p>Use the <code>printf()</code> function.</p>
```

要在代码片段中包含字面量的重音符号, 可以使用多个重音符号作为起始和结束标记:

```markdown
``There is a literal backtick (`) here.``
```

会生成:

```markdown
<p><code>There is a literal backtick (`) here.</code></p>
```

包含代码片段的重音符号可以包含空格 -- 起始标记后一个, 结束标记前一个. 这使你可以在代码片段开始和结束位置使用重音符号的字面量:

```markdown
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

会生成:

```markdown
<p>A single backtick in a code span: <code>`</code></p>

<p>A backtick-delimited string in a code span: <code>`foo`</code></p>
```

在代码片段中, 英镑符号和尖括号会被转换成相应的字符实体, 这使得包含 HTML 标签很容易. Markdown 会将下面的代码:

```markdown
Please don't use any `<blink>` tags.
```

转成:

```markdown
<p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>
```

这样写:

```markdown
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
```

会生成:

```markdown
<p><code>&amp;#8212;</code> is the decimal-encoded
equivalent of <code>&amp;mdash;</code>.</p>
```

### 图片

通常, 要用 "原生" 的语法在纯文本格式中插入图片是很困难的.

Markdown 使用了类似链接的语法来插入图片, 包含两种形式: *内联* 和 *引用*.

内联图片语法如下:

```markdown
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

也就是:

- 一个感叹号: `!`;
- 紧跟着一对方括号, 包含了图片的 `alt` 属性;
- 紧跟着一对圆括号, 包含了图片的 URL 或者路径, 以及一个可选的用单引号或双引号包裹的 `title` 属性.

引用图片语法如下:

```markdown
![Alt text][id]
```

"id" 是图片引用的名称. 图片引用使用链接定义的相同语法:

```markdown
[id]: url/to/image  "Optional title attribute"
```

Markdown 没有语法指定图片尺寸; 如果需要指定图片尺寸, 可以使用 HTML `<img>` 标签.

## 其他元素

### 转义字符

Markdown 中可以使用反斜杠转义 Markdown 语法符号为字面量. 例如, 如果你想用星号包围一个单词 (而不是 HTML 的 `<em>` 标签), 你可以在星号前面加反斜杠, 就像这样:

```markdown
\*literal asterisks\*
```

Markdown 为下面字符提供反斜杠转义:

```markdown
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
```

### 自动链接

Markdown 支持一种 "自动" 创建 URL 和 email 地址链接的简短形式: 只需用尖括号包围 URL 或 email 地址即可. 这意味着如果你想为 URL 和 email 链接加上可点击的链接, 你只需要这样写:

```markdown
<http://example.com/>
```

Markdown 将把它转化为:

```markdown
<a href="http://example.com/">http://example.com/</a>
```

email 链接也是一样, 除此之外, Markdown 还会随机添加十进制和十六进制字符实体引用来帮助你混淆邮件地址以屏蔽广告和垃圾邮件爬虫. 例如, Markdown 会将如下代码:

```markdown
<address@example.com>
```

转化为:

```markdown
<a href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;
&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;
&#109;">&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;
&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a>
```

这在浏览器中会渲染为可点击的 "address@example.com" 链接.

(这种字符实体编码的小把戏确实可以欺骗一些简单的广告和垃圾邮件爬虫, 但是不足以欺骗所有爬虫. 虽然聊胜于无, 但是这种形式发布的邮件地址最终还是会收到垃圾邮件的.)

## 结语

特别声明: 本文来源于[Markdown中文文档](https://markdown-zh.readthedocs.io/en/latest/), 感谢文档提供者!
