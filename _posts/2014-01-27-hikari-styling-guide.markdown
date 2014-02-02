---
layout: post
title:  "Styling guide for Hikari: best practices"
date:   2014-01-27 16:57:51
---

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

>Good design is as little design as possible, said Dieter. Use quotations very carefully; especially if you don't understand them. 

No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

* Bullet points are so fancy
* Easy to read, they make you look like a pro
* Even when completely random 

In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.

1. Ooh, and with numbers, it's even fancier
2. It's like 1, 2, 3, did you see?
3. Crazy stuff all around us; scary

There's nothing like a good block of code! Especially when picked randomly out of Github ([styledocco.js](https://github.com/jacobrask/styledocco/blob/master/styledocco.js)).  

{% highlight js %}
var separate = function(css) {
  var lines = css.split('\n');
  var docs, code, line, blocks = [];
  while (lines.length) {
    docs = code = '';

    while (lines.length && checkType(lines[0]) === 'single') {
      docs += formatDocs(lines.shift());
    }

    if (lines.length && checkType(lines[0]) === 'multistart') {
      while (lines.length) {
        line = lines.shift();
        docs += formatDocs(line);
        if (checkType(line) === 'multiend') break;
      }
    }
    while (lines.length && (checkType(lines[0]) === 'code' || checkType(lines[0]) === 'multiend')) {
      code += formatCode(lines.shift());
    }
    blocks.push({ docs: docs, code: code });
  }
  return blocks;
};
{% endhighlight %}

<img src="{{ site.baseurl }}/assets/img/img2.jpg">

# Heading 1
Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.

## Heading 2
But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?

### Heading 3
In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.

#### Heading 4
But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
