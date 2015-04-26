---
title: works
---

[...]

{% for work in site.works | sort: 'title', 'last' %}
 -  [{{work.tagline}} [{{ work.title }}]](/works/{{work.title}})
{% endfor %}

[...]
