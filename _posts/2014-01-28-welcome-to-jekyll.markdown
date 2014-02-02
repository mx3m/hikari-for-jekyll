---
layout: post
title:  "Welcome to Hikari for Jekyll!"
date:   2014-01-28 16:57:51
---

Welcome to *Hikari*, a responsive, fluid and minimalist Jekyll theme for developers. As a web designer keen on learning how to develop my own stuff, reading developers' blog has always been the way to learn from the best. So I thought it was time to give back! 

*Hikari* is an open-source Jekyll theme packed with everything you need to get started and share your best learnings with the community.

Of course, you don't need to be a developer to use *Hikari*! Although, I wouldn't recommend it to anyone who's not willing to dive more than 5 minutes into my (sometimes) messy front-end code!  

Jekyll and pygments can easily help you to display your best snippets. I slightly styled them, and this is how it looks: 

{% highlight html %}
<header>
  <h1>Hello World!</h1>
</header>
{% endhighlight %}

{% highlight css %}
header {
  width: 100%;
  height: 100%;
  margin: 0;
}

header h1 {
  font: 3em Georgia, serif;
  font-weight: 700;
}
{% endhighlight %}

{% highlight js %}
$(document).ready(function(){
  $('header').fadeIn();	
});
{% endhighlight %}

Note that so far, only HTML, CSS and Javascript are styled out of the box. But everything's ready for you to start styling your favorites languages: Python, Ruby, PHP and [many more](http://rubygems.org/gems/pygments.rb). 

Check out the [Jekyll docs](http://jekyllrb.com) for more info on how to get the most out of Jekyll. 

More on [Github](https://github.com/mojombo/jekyll).
